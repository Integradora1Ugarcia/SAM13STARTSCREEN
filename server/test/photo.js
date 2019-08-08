const { expect } = require('chai');
const sinon = require('sinon');
require('sinon-mongoose');

const Photo = require('../models/photo');

describe('Photo Model', () => {
  // Create a new photo
  it('Should create a new photo', (done) => {
    const PhotoMock = sinon.mock(new Photo({
      title: 'Kefla vs Son Goku',
      description: 'La mejor pelea',
      imageURL: 'keflavssongoku.png',
      public_id: '123456789'
    }));
    const photo = PhotoMock.object;
    PhotoMock
      .expects('save')
      .yields(null);

      photo.save((err) => {
      PhotoMock.verify();
      PhotoMock.restore();
      expect(err).to.be.null;
      done();
    });
  });

});//End describe