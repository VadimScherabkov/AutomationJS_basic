const {expect} = require('chai');
const {sendRequest} = require('../helpers/api.helper');
const postTestData = require('../config/postTestData.json');
const invaidPostTestData = require('../config/invalidPostTestData.json');
const putTestData = require('../config/putTestData.json');
const emptyTestData = require('../config/emptyTestData.json');

describe('GET method', () => {
    it('Validate that the first post has userId = 1', async () => {
        const responce = await sendRequest('posts/1');

        expect(responce.data.userId).to.equal(1);
        expect(responce.status).to.equal(200);
    });

    it('Validate title of users post', async () => {
        const responce = await sendRequest('posts/1');

        expect(responce.data.title)
        .to.equal('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
    });

    // этот тест возвращает ошибку, будто он не понимает, что это 404 ошибка. Я пробовал в браузере ломать url и он возвращал 404.
    // TypeError: Cannot read properties of undefined (reading 'status')
    it('Invalid url returns 404 error', async () => {
        const responce = await sendRequest('postfgnfns/1');

        expect(responce.status).to.equal(404);
    });

    it('Find post with by passing id into url', async () => {
        const responce = await sendRequest('posts?id=30');
        const object = responce.data.find((user) => user.id === 30);

        expect(object.id).to.equal(30);
    });

    it('Find all posts', async () => {
        const responce = await sendRequest('posts');

        expect(responce.status).to.equal(200);
    });
});

describe('POST method', () => {
    it('Valid data is created', async () => {
        const responce = await sendRequest('posts', postTestData, 'post');

        expect(responce.data.title).to.equal('JS Automation Course');
        expect(responce.data.body).to.equal('This is some body text');
        expect(responce.data.userId).to.equal(1);
    });

    it('Validate that successful creating a post returns 201 status', async () => {
        const responce = await sendRequest('posts', postTestData, 'post');

        expect(responce.status).to.equal(201);
    });

    it('Validate that successful creating a post does not return 200 status', async () => {
        const responce = await sendRequest('posts', postTestData, 'post');

        expect(responce.status).not.to.equal(200);
    });

    // тоже самое
    it('Invalid url returns 404 error', async () => {
        const responce = await sendRequest('postssss', postTestData, 'post');

        expect(responce.status).to.equal(404);
    });

    it('All data types are accepted by server ', async () => {
        const responce = await sendRequest('posts', invaidPostTestData, 'post');

        expect(responce.status).to.equal(201);
        expect(responce.data.title).to.equal(1);
        expect(responce.data.body).to.equal(true);
        expect(responce.data.userId).to.equal('abc');
    });

    it('Validate empty data is created with id 101', async () => {
        const responce = await sendRequest('posts', {}, 'post');

        expect(responce.status).to.equal(201);
        expect(responce.data.id).to.equal(101);
    });

    it('Validate empty data is created with id 101', async () => {
        const responce = await sendRequest('posts', emptyTestData, 'post');

        expect(responce.status).to.equal(201);
        expect(responce.data.id).to.equal(101);
        expect(responce.data.title).to.equal('');
        expect(responce.data.body).to.equal(' ');
        expect(responce.data.userId).to.equal('');
    });
});

describe('PUT method', () => {
    it('All data is updated with new data', async () => {
        const responce = await sendRequest('posts/1', putTestData, 'put');

        expect(responce.status).to.equal(200);
        expect(responce.data.userId).to.equal(666);
        expect(responce.data.title).to.equal(undefined);
        expect(responce.data.body).to.equal(undefined);
        expect(responce.data.id).to.equal(1);
    });

    //тоже самое
    it('Invalid url returns 404 error', async () => {
        const responce = await sendRequest('postssss', putTestData, 'put');

        expect(responce.status).to.equal(404);
    });

    it('Validate empty data is created with id 101', async () => {
        const responce = await sendRequest('posts/1', {}, 'put');

        expect(responce.status).to.equal(200);
        expect(responce.data.id).to.equal(1);
        expect(responce.data.userId).to.equal(undefined);
        expect(responce.data.title).to.equal(undefined);
        expect(responce.data.body).to.equal(undefined);
    });

    it('Validate empty data is created with id 101', async () => {
        const responce = await sendRequest('posts/1', emptyTestData, 'put');

        expect(responce.status).to.equal(200);
        expect(responce.data.id).to.equal(1);
        expect(responce.data.title).to.equal('');
        expect(responce.data.body).to.equal(' ');
        expect(responce.data.userId).to.equal('');
    });
});

describe('DELETE method', () => {
    it('Validate that post is deleted', async () => {
        const responce = await sendRequest('posts/1', 'delete');

        expect(responce.status).to.equal(200);
    });

    it('Validate that all posts are deleted', async () => {
        const responce = await sendRequest('posts', 'delete');

        expect(responce.status).to.equal(200);
    });

    it('Delete filtered post', async () => {
        const responce = await sendRequest('posts?id=30', 'delete');

        expect(responce.status).to.equal(200);
    });

    // тоже самое
    it('Invalid url returns 404 error', async () => {
        const responce = await sendRequest('postssss', 'delete');

        expect(responce.status).to.equal(404);
    });

    // тоже не возвраащает ошибку, только TypeError: Cannot read properties of undefined (reading 'status')
    it('Delete non existing post', async () => {
        const responce = await sendRequest('posts/666', 'delete');

        expect(responce.status).to.equal(200);
    });
});
