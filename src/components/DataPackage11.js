import React, { Component } from 'react'
import InputDataNumber from '../components/InputDataNumber';

export class DataPackage11 extends Component {
  render() {
    return (
      <div>
        <InputDataNumber
          label="E34: Mode de financement du véhicule tracté (1 pour Emprunt, 2 pour Crédit Bail, 3 pour Location Financière)"
          id='E34'
        />
      </div>
    )
  }
}

export default DataPackage11