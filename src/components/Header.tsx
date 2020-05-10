import React from 'react'
import Fuse from 'fuse.js'
import filesize from 'filesize'
import moment from 'moment'

const Header = (props) => {

  const searchList = (x) => {
    let query = x.target.value;

    if (x.keyCode === 13) {
      const options = {
        // isCaseSensitive: false,
        // includeScore: false,
        // shouldSort: true,
        // includeMatches: false,
        // findAllMatches: false,
        // minMatchCharLength: 1,
        // location: 0,
        // threshold: 0.6,
        // distance: 100,
        // useExtendedSearch: false,
        keys: [
          "name",
          "size",
          "data"
        ]
      };

      let delta = props.data.map(item => {
        return {
          "name": item.name,
          "size": filesize(item.size),
          "date": moment(item.modified).format('MMMM D, YYYY')

        }
      })

      const fuse = new Fuse(delta, options);
      let results = fuse.search(query)

      console.log(results)
    }
  }

  return (
    <div className="header">
      <i className="la la-atom la-3x logo" />

      <div className="nav-group">
        <input className="search" placeholder="Search"
          onKeyUp={(e) => {
            searchList(e)
          }}
        />
      </div>
    </div>
  )
}

export default Header;