import {CardContainerBase} from './card-container.styles';

const CardContainer = ({props}) => {
    const {name, email, username, id} = props;

    return (
        <CardContainerBase key={id}>
            <img
                src={`https://robohash.org/${id + 'GERTY:U42'}?set=set1&size=200x200`}
                alt={`robot ${name}`}
            />
            <h1 key={id}>{username}</h1>
            <h2>{name}</h2>
            <h3>{email}</h3>
        </CardContainerBase>
    )
}


// class CardContainer extends Component {
//     render() {
//         const {name, email, username, id} = this.props.props
//
//     return (
//         <div
//             className='card-container'
//             key={id}
//         >
//             <img
//                 src={`https://robohash.org/${id + 'GERTY:E2'}?set=set1&size=200x200`}
//                 alt={`robot ${name}`}
//             />
//         <h1 key={id} className='nick-name'>{username}</h1>
//             <h2 className='name'>{name}</h2>
//             <h3 className='name'>{email}</h3>
//         </div>
//     )
//         }
// }

export default CardContainer;