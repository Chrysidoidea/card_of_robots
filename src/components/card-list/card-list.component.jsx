import {CardListWrapper} from './card-list.styles';

import CardContainer from "../card-container/card-container.component";

const CardList = ({specimens}) => (
    <CardListWrapper>
        {specimens.map((specimen) => {
            return (
                <CardContainer
                    props={specimen}
                    key={specimen.id}
                />
            )
        })}
    </CardListWrapper>
)


// class CardList extends Component {
//     render() {
//         const { grasshoppers } = this.props;
//
//         return (
//             <div className='card-list'>
//
//             {grasshoppers.map((specimen) => {
//                 // const {name, email, username, website, id} = grasshopper;
//
//
//
//                 return (
//                     <CardContainer
//                         props={specimen}
//                         key={specimen.id}
//                     />
//                 // <div
//                 //     className='card-container'
//                 //     key={grasshopper.id}
//                 // >
//                 //     <img
//                 //         src={`https://robohash.org/${id + 'sf4i2q'}?set=set2&size=180x180`}
//                 //         alt={`robot ${name}`}
//                 //     />
//                 // <h1 key={id} className='nick-name'>{username}</h1>
//                 //     <h2 className='name'>{name}</h2>
//                 //     <h3 className='name'>{email}</h3>
//                 //     <h3 className='name'>{website}</h3>
//                 // </div>
//                 )})}
//                </div>
//         );
//     }
// }


export default CardList;