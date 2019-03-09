import React, { Component } from 'react'

export default class Todoinput extends Component {
   
  render() {
      const {item, handleChange, handleSubmit, editItem} = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text bg-primary text-white">
                        <i className="fas  fa-book"/>
                    </div>
                </div>
                <input type="text" className="text-capitalize form-control" value={item}
                onChange={handleChange} placeholder="Add Item"/>
            </div>
            <button type="submit"
            className={
            editItem ? "btn btn-block btn-success mt-3":"btn btn-block btn-primary mt-3"}>
            
            {editItem ? "Edit" : "Click To Add"}</button>
        </form>
      </div>
    )
  }
}
