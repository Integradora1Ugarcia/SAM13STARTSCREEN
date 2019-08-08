const { expect } = require('chai');
const sinon = require('sinon');
require('sinon-mongoose');

const Internal = require('../models/internal');

describe('Internal Model', () => {
  // Create a new internal
  it('Should create a new internal', (done) => {
    const InternalMock = sinon.mock(new Internal({
      type: 'Aumento de Salario',
      responsible: 'Camila Lira',
      amount: 200,
      reason: 'Pagar los cursos de Udemy'
    }));
    const internal = InternalMock.object;
    InternalMock
      .expects('save')
      .yields(null);

    internal.save((err) => {
      InternalMock.verify();
      InternalMock.restore();
      expect(err).to.be.null;
      done();
    });
  });

  // Find internal by type
  it('Should find internal by type', (done) => {
    const internalMock = sinon.mock(Internal);
    const expectedInternal = {
      _id: '02102020202',
      type: 'Aumento de salario'
    };

    internalMock
      .expects('findOne')
      .withArgs({ type: 'Aumento de salario' })
      .yields(null, expectedInternal);

    Internal.findOne({ type: 'Aumento de salario' }, (err, result) => {
      internalMock.verify();
      internalMock.restore();
      expect(result.type).to.equal('Aumento de salario');
      done();
    });
  });

});//End describe