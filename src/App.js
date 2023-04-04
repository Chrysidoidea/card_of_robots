import {useEffect, useState} from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import './App.css';

const App = () => {
    const [searchField, setSearchField] = useState('');
    const [specimens, setSpecimens] = useState([]);
    const [filteredSpecimens, setFilteredSpecimens] = useState(specimens);
    const defaultTitle = 'Lunar GERTY v .2 || U:`42` examples';
    const [title, setTitle] = useState(defaultTitle);



    console.log('render')

    useEffect(() => {
        console.log('setSpecimens is changed (useEffect activated)');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setSpecimens(data));
    }, []);

    useEffect(() => {
        const newFilteredSpecimens = specimens.filter((specimen) => {
            return specimen.name.toLowerCase().includes(searchField);
        });

        setFilteredSpecimens(newFilteredSpecimens);

    }, [specimens, searchField]);

if (title === '') {
    setTitle(defaultTitle)
}


    const onTitleChange = (event) => {
        setTitle(event.target.value);

    }
    const onSearchChange = (event) => {
        console.log('changed')
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    }


    return (
        <div className="App">
            <h1 className='app-title'>{title}</h1>
            <SearchBox
                onChangeHandler={onSearchChange}
                placeholder={'search for specimen'}
                className='specimens-search-box'
                type='search'
            />
            <SearchBox
                onChangeHandler={onTitleChange}
                placeholder={'title change'}
                className='specimens-search-box'
                type='search'
            />
            <CardList specimens={filteredSpecimens} />


        </div>
    )
}
// class App extends Component {
//     constructor() {
//         super();
//
//         // console.log('constructor')
//
//
//         this.state = {
//             grasshoppers: [],
//             searchField: '',
//     };
//     };
//     componentDidMount() {
//         // console.log('fetch data')
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response => response.json())
//             .then(data => this.setState(() => {
//                 return { grasshoppers: data };
//             }));
//     };
//     onSearchChange = (event) => {
//         // console.log('search')
//         const searchField = event.target.value.toLocaleLowerCase();
//         this.setState(() => {
//             return { searchField };
//         });
//     };
//
//
//   render() {
//         console.log('rendered');
//         const { grasshoppers, searchField } = this.state;
//         const { onSearchChange } = this;
//       const filteredGrasshoppers = grasshoppers.filter((grasshopper) => {
//           return grasshopper.name.toLowerCase().includes(searchField);
//       });
//
//     return (
//         <div className="App">
//             <h1 className='app-title'>Lunar GERTY || E:2 examples</h1>
//             <SearchBox
//                 onChangeHandler={onSearchChange}
//                 placeholder={'search for specimen'}
//                 class='grasshoppers-search-box'
//                 type='search'
//             />
//             <CardList grasshoppers={filteredGrasshoppers} />
//
//
//         </div>
//     );
//   };
//
//
// }

export default App;
