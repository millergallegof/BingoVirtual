/* Import of required packages */
import React, { Component } from 'react'

/**
* [Class which will render the elements to be displayed on the client.]
*
*
* @version 1.01.00
*
* @author Miller Esteban Gallego Forero
*
* @since Available from version 1
*
*/
export default class GameBingo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positionDisable: {
                0: null,
                1: null,
                2: null,
                3: null,
                4: null,
            },
            value: {
                0: 1
            }
        }
        this.handleClick = this.handleClick.bind(this)
        this.disableInput = this.disableInput.bind(this)
    }

    /**
    * [method with which the state attribute is changed from state to true to make a button disable..]
    *
    *
    * @param position attribute type to modify the status of the input.
    * 
    * 
    * @throws error in presenting the pledge
    *
    * @author Miller Esteban Gallego Forero - miller.gallegof@gmail.com
    *
    * @since Version 1
    *
    *
    */
    disableInput(position) {

        this.setState({
            positionDisable: {

                [position]: true
            }
        })
    }

    /**
    * [Method which reacts with a click of a button brings the value of what is in the input of the bingo box.]
    *
    *
    * @param e stores the value that is sent when an event occurs.
    * 
    * 
    * @throws error in presenting the pledge
    *
    * @author Miller Esteban Gallego Forero - miller.gallegof@gmail.com
    *
    * @since Version 1
    *
    *
    */
    handleClick(e) {
        const position = e.target.name
        // console.log([position]);
        this.disableInput(position)
    }

    /**
    * [Method which splits the array sent by the MysQL database and renders it in such a way that the bingo card is formed.]
    *
    *
    * @param row numero de columna en el que se plasmara los elementos de la BD.
    * @return Renders a click which displays the elements of the bingo card column by column, 
    *         gives them properties which makes the button that has already been pressed disable.
    * 
    * @throws error in presenting the pledge
    *
    * @author Miller Esteban Gallego Forero - miller.gallegof@gmail.com
    *
    * @since Version 1
    *
    *
    */
    bingoRow(row) {
        let prueba = ['1', '2', '3', '4', '5', '1', '2', '3', '4', '5', '1', '2', '3', '4', '5', '1', '2', '3', '4', '5', '1', '2', '3', '4', '5'];
        let rowOne = prueba.slice(0, 5);
        let rowTwo = prueba.slice(5, 10);
        let rowThree = prueba.slice(10, 15);
        let rowFour = prueba.slice(15, 20);
        let rowFive = prueba.slice(20, 25);
        let renderRow;
        switch (row) {
            case 1:
                renderRow = rowOne;

                break;
            case 2:
                renderRow = rowTwo;

                break;
            case 3:
                renderRow = rowThree;

                break;
            case 4:
                renderRow = rowFour;

                break;
            case 5:
                renderRow = rowFive;

                break;
            default:
                break;
        }
        return (
            <tr >
                {renderRow.map((num, index) => {
                    return (
                        <td key={num} style={{ width: '100px' }}>
                            <input name={index} type="buton" disabled={false} placeholder={num} className="btn btn-light"
                                onClick={this.handleClick} style={{ width: '100px', height: '100px' }} />
                        </td>
                    )
                })
                }
            </tr>
        )

    }

    /**
    * [Render method which has a header for the bingo card but which also renders row by row the card data sent by the DB.]
    *
    *
    * @return Renders the elements of the previous methods plus the page header.
    * 
    * @throws error in presenting the pledge
    *
    * @author Miller Esteban Gallego Forero - miller.gallegof@gmail.com
    *
    * @since Version 1
    *
    *
    */
    render() {
        return (
            <div className='d-flex container' >
                <div className='' style={{ width: '600px', marginTop: '20px' }}>
                    <h2 className='text-center'>BINGO CARD</h2>
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th scope="col"><p className='display-5 text-center'>B</p></th>
                                <th scope="col"><p className='display-5 text-center'>I</p></th>
                                <th scope="col"><p className='display-5 text-center'>N</p></th>
                                <th scope="col"><p className='display-5 text-center'>G</p></th>
                                <th scope="col"><p className='display-5 text-center'>O</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {this.bingoRow(1)}
                            {this.bingoRow(2)}
                            {this.bingoRow(3)}
                            {this.bingoRow(4)}
                            {this.bingoRow(5)}

                        </tbody>
                    </table>
                </div>
            </div >
        )
    };
}

