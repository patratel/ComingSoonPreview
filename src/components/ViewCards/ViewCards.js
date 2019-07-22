import React from 'react';

import ViewCard from './ViewCard/ViewCard';
import vector from '../../assets/icons/viewCards/vector.png';
import printer from '../../assets/icons/viewCards/printer.png';
import monitor from '../../assets/icons/viewCards/monitor.png';
import cogwheel from '../../assets/icons/viewCards/cogwheel-outline.png';
import classes from './ViewCards.module.css';

const viewCards = (props) => {

    const viewCards = [
        {
            icon: vector,
            title: "Graphic Design",
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" 
        },
        {
            icon: printer,
            title:"Print Design",
            body: "When an unknown printer took a galley of type and scrambled itto make a type specimen book. It has survived not only five centuries"
        },
        {
            icon: monitor,
            title: "Motion Design",
            body: "But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum."
        },
        {
            icon: cogwheel,
            title: "Strategy & Media",
            body: "and more recently with desktop publishing software like Ladus PageMaker including versions of Lorem Ipsum. It is is not simply a random text"
        }
    ];

    const cards = viewCards.map((ObjectMapped, index) => {
        return (
            <ViewCard 
                icon = {ObjectMapped.icon} 
                title = {ObjectMapped.title}
                body = {ObjectMapped.body}
                type = {null} />         
        );
    })
    return(

        <div className = {classes.Container}>
            {cards}
        </div>

    );

}

export default viewCards;