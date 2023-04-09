import {useEffect, useState, ChangeEvent} from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import {getData} from "./utils/data.utils";
import './App.css';


export type Robot = {
    id: string;
    name: string;
    username: string;
    email: string;
}
const App = () => {
    const [searchField, setSearchField] = useState('');
    const [specimens, setSpecimens] = useState<Robot[]>([]);
    const [filteredSpecimens, setFilteredSpecimens] = useState(specimens);
    const defaultTitle = 'Lunar GERTY v .2 || U:`42` examples';
    const [title, setTitle] = useState(defaultTitle);


    useEffect(():void => {

        (async () => {
            try {
                const robots = await getData<Robot[]>("https://jsonplaceholder.typicode.com/users");
                setSpecimens(robots);
            } catch (error) {
                console.error("Error fetching robots:", error);
            }
        })();


    }, []);

    useEffect((): void => {
        const newFilteredSpecimens = specimens.filter((specimen):boolean => {
            return specimen.name.toLowerCase().includes(searchField);
        });

        setFilteredSpecimens(newFilteredSpecimens);

    }, [specimens, searchField]);

    if (title === '') {
        setTitle(defaultTitle)
    }


    const onTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setTitle(event.target.value);
    }
    const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
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
            <CardList robots={filteredSpecimens}/>
        </div>
    )
}

export default App;
