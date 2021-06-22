import { Fragment } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();
  const qerryParams = new URLSearchParams(location.search);
  const isSortAsc = qerryParams.get("sort") === "asc";
  const sortQuotes = (quotes, asc) => {
    return quotes.sort((quoteA, quoteB) => {
      if (asc) {
        return quoteA > quoteB ? 1 : -1;
      } else {
        return quoteA < quoteB ? 1 : -1;
      }
    });
  };
  const sortedQuotes = sortQuotes(props.quotes, isSortAsc);
  const changeSortingHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortAsc ? "desc" : "asc"}`,
    });
    // history.push(`${location.pathname}?sort=${isSortAsc ? "desc" : "asc"}`);
  };
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sorting {isSortAsc ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
