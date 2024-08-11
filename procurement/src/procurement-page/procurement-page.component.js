import React from "react";
import { getProcurement } from "../utils/api.js";
import SelectedPerson from "./selected-person/selected-person.component.js";
import { Button } from "@tp/styleguide";

const initialState = {
  pageNum: 1,
  nextPage: true,
  loadingprocurement: true,
  selectedPerson: undefined,
  procurement: [],
};

export default function procurementPage(props) {
  const { match } = props;
  const { params = {} } = match;
  const { personId } = params;
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const { nextPage, loadingprocurement, procurement, selectedPerson, pageNum } = state;

  React.useEffect(() => {
    if (nextPage && loadingprocurement) {
      dispatch({ type: "loadingprocurement" });

      const subscription = getProcurement(pageNum).subscribe(
        (results) => {
          dispatch({ type: "newprocurement", results });
        },
        (err) => {
          console.log("err", err); // eslint-disable-line
        }
      );

      return () => subscription.unsubscribe();
    }
  }, [pageNum, nextPage, loadingprocurement]);

  React.useEffect(() => {
    if (
      (state.selectedPerson === undefined && personId !== undefined) ||
      (state.selectedPerson && personId !== state.selectedPerson.id)
    ) {
      const person = state.procurement.find((p) => p.id === personId);
      if (person) {
        dispatch({ type: "selectPerson", person });
      }
    }
  }, [state.procurement, state.selectedPerson, personId]);

  return (
    <div>
      <div className="flex">
        <div className="p-6 w-1/3">
          {nextPage ? (
            <Button
              loading={loadingprocurement}
              onClick={fetchMore}
              disabled={!nextPage || loadingprocurement}
            >
              Fetch More procurement
            </Button>
          ) : null}
          {loadingprocurement && procurement.length === 0 ? (
            <div>Loading ...</div>
          ) : (
            <procurementList
              procurement={procurement}
              loadingprocurement={loadingprocurement}
              selectPerson={selectPerson}
            />
          )}
        </div>
        <div className="w-2/3 p-6 border-l-2 border-white">
          <div>
            <SelectedPerson selectedPerson={selectedPerson} />
          </div>
        </div>
      </div>
    </div>
  );

  function selectPerson(index) {
    dispatch({ type: "selectPersonByIndex", index });
  }

  function fetchMore() {
    dispatch({ type: "fetchMore" });
  }
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "loadingprocurement":
      return { ...state, loadingprocurement: true };
    case "newprocurement":
      return {
        ...state,
        procurement: state.procurement.concat(action.results.results),
        nextPage: Boolean(action.results.next),
        loadingprocurement: false,
      };
    case "selectPerson":
      return {
        ...state,
        selectedPerson: action.person,
      };
    case "fetchMore":
      return {
        ...state,
        loadingprocurement: true,
        pageNum: state.pageNum + 1,
      };
    default:
      throw Error(`Unknown action type '${action.type}'`);
  }
}
