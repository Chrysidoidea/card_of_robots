import {CardListWrapper} from './card-list.styles';
import {Robot} from "../../App";
import CardContainer from "../card-container/card-container.component";

type CardListProps = {
    robots: Robot[];
}

const CardList = ({robots}: CardListProps) => (
    <CardListWrapper>
        {robots.map((robot) => {
            return (
                <CardContainer
                    robot={robot}
                    key={robot.id}
                />
            )
        })}
    </CardListWrapper>
)

export default CardList;