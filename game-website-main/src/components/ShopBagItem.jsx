import React, {useContext, useState} from "react";
import "./shopBagItem.css";
import { AppContext } from "../App";

const ShopBagItem = ({ game, index }) => {

    const {bag, setBag} = useContext(AppContext);

    const handleRemoveFromBag = () => {
        setBag(bag.filter(item => item._id !== game._id))
    };
    
  return (
    <tr className="shopBagItem">
      <th scope="row">{index + 1}</th>
      <td className="img-fluid">
        <img src={game.img} alt="" />
      </td>
      <td>{game.title}</td>
      <td>€{game.price.toFixed(2)}</td>
      <td>{game.discount * 100}%</td>
      <td>€{(game.price * (1 - game.discount)).toFixed(2)}</td>
      <td>
        <a href="#" onClick={() => handleRemoveFromBag(game)}>
          <i className="bi bi-trash"></i>
        </a>
      </td>
    </tr>
  );
};

export default ShopBagItem;
