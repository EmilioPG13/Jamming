import React from "react";
import styles from './SearchResults.module.css';
import TrackList from '../TrackList/Tracklist';

function SearchResults(props) {
    return (
        <div className={styles.SearchResults}>
            {/* Add tracklist component */}
            <TrackList 
                userSearchResults={props.userSearchResults}
                isRemoval={false}
                onAdd={props.onAdd}
            />
        </div>
    );
}

export default SearchResults