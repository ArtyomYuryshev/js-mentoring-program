const {describe, it} = require('mocha');
const {expect} = require('chai');

const {cleanUpArtifacts} = require('../utils');
const {jsonParser} = require('../parser/parser');
const {sendRequest} = require('../fetch/fetch');

describe('Fetch method', () => {
    let responseJson;

    before(async () => {
        cleanUpArtifacts();
        await sendRequest();
    });

    beforeEach(() => responseJson = require('../fetch/response.json'));

    it('should receive items', () => {
        responseJson
            .forEach(item => expect(typeof item).to.be.equal('object'));
    });

    it('should contain ids below 20', () => {
        responseJson
            .map(({id}) => id)
            .forEach(id => expect(id).to.be.below(20));
    });
});

describe('JSON Parser', () => {
    let parserJson;

    before((done) => {
        cleanUpArtifacts();
        jsonParser(done);
    });

    beforeEach(() => parserJson = require('../parser/parsed.json'));

    it('.html should be replaced for every item', () => {
        expect(parserJson.every(({docId}) => docId.includes('html'))).to.be.equal(false);
    });

    it('every item should contain http://doc.epam.com/ string', () => {
        expect(parserJson.every(({docId}) => docId.includes('http://doc.epam.com/'))).to.be.equal(true);
    });
});
