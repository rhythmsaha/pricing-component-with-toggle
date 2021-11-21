import classes from "./PopularCard.module.scss";

const PopularCard = ({ heading, price, features }) => {
    return (
        <div className={classes.Card}>
            <h1 className={classes.heading}>{heading}</h1>
            <p className={classes.Price}>
                <span>$</span>
                {price}
            </p>

            <ul className={classes.Features}>
                {features?.map((f, i) => (
                    <li key={i}>{f}</li>
                ))}
            </ul>

            <button className={classes.Btn}>LEARN MORE</button>
        </div>
    );
};

export default PopularCard;
