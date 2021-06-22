import { Fragment, useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getSingleQuote } from "../../lib/api";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";
import LoadingSpinner from "../UI/LoadingSpinner";

const DUMMY_QUOTES = [
  { id: "q1", author: "Author1", text: "text 1" },
  { id: "q2", author: "Author2", text: "text 2" },
];

const QuoteDetails = () => {
  const params = useParams();
  const match = useRouteMatch();
  const { quoteId } = params;
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote) {
    return <p>No quote found</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote
        text={loadedQuote.text}
        author={loadedQuote.author}
      ></HighlightedQuote>
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;
