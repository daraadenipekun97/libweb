import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./css/myReadingGoals.css";
import Select from "react-select";
import moment from "moment";
import {
  addGoals,
  fetchAllBookNames,
  restoreAddGoalsInitial,
  fetchAllGoals,
  deleteGoal,
  restoreDeleteGoalInitial,
} from "../../Actions";
import Spinner from "../spinner/Spinner";
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare, AiFillDelete } from "react-icons/ai";

const Modal = ({ handleClose, show, data, clickedId }) => {
  const showHideClassName = show ? "main-modal-bg display-block" : "main-modal-bg display-none";

  const filtered = data.find((datum) => {
    return datum.id === clickedId;
  });

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        {filtered && (
          <>
            <h4 className="modal-title">{filtered.content}</h4>
            <hr />
            <p className="modal-text">{filtered.achieve_by}</p>
          </>
        )}

        <hr />
        <button className="modal-btn" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

const MyReadingGoals = () => {
  const dispatch = useDispatch();
  const { allBookNames } = useSelector((state) => state.books);
  const { addGoalsSuccess, addGoalsFailure, allGoals, deleteGoalsSuccess, deleteGoalsFailure } =
    useSelector((state) => state.library);

  const [valid, setValid] = useState(false);
  const [requiredText, setRequiredText] = useState("");

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: "#fff",
      border: "2px solid #e9eaee",
      minHeight: "30px",
      height: "50px",
      boxShadow: state.isFocused ? null : null,
      marginBottom: "0.5rem",
      fontSize: "15px",

      "&:hover": {
        border: "1px solid #5e458b",
      },
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      height: "50px",
      padding: "0 6px",
    }),

    input: (provided, state) => ({
      ...provided,
      margin: "0px",
    }),
    indicatorSeparator: (state) => ({
      display: "none",
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: "50px",
    }),
  };

  const dateTypeStart = useRef(null);
  const dateTypeEnd = useRef(null);

  const handleDateTypeStart = () => {
    dateTypeStart.current.type = "date";
  };

  const handleDateTypeStartBlur = () => {
    dateTypeStart.current.type = "text";
  };

  const handleDateTypeEnd = () => {
    dateTypeEnd.current.type = "date";
  };

  const handleDateTypeEndBlur = () => {
    dateTypeEnd.current.type = "text";
  };

  useEffect(() => {
    dispatch(fetchAllBookNames());
    dispatch(fetchAllGoals());
    dateTypeStart.current.min = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0];
    dateTypeEnd.current.min = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0];
  }, [dispatch]);

  const initialFormState = {
    buttonState: false,
    buttonText: "Create Goal",
    spinner: false,
  };

  const [formState, setFormState] = useState({ ...initialFormState });

  const initialTableState = {
    buttonText: "Delete",
  };

  const [tableState, setTableState] = useState({ ...initialTableState });

  const initialFormValues = {
    start_date: "",
    end_date: "",
    book_title: "",
    achieve_by: "",
  };

  const [formValues, setFormValues] = useState({ ...initialFormValues });

  const startDateHandler = (e) => {
    setRequiredText("");

    if (e) {
      let dateValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        start_date: dateValue,
      });
    } else {
      setFormValues({
        ...formValues,
        start_date: "",
      });
    }
  };

  const endDateHandler = (e) => {
    setRequiredText("");

    if (e) {
      let dateValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        end_date: dateValue,
      });
      // dateTypeEnd.current.min = new Date(new Date(formValues.start_date).getTime() + 1 * 24*60*60*1000).toISOString().split("T")[0]
    } else {
      setFormValues({
        ...formValues,
        end_date: "",
      });
    }
  };

  const [theBooks, setTheBooks] = useState([]);

  useEffect(() => {
    const createBooksSelect = () => {
      let booksData = [];
      allBookNames.map((allBook) => {
        let option = { label: allBook.name };
        booksData.push(option);
      });

      setTheBooks(booksData);
    };

    allBookNames.length !== 0 && createBooksSelect();
  }, [allBookNames]);

  const [booksName, setBooksName] = useState({});

  const booksHandler = (e) => {
    setRequiredText("");

    if (e) {
      setBooksName(e);
    }
  };

  const achievedByHandler = (e) => {
    setRequiredText("");

    if (e) {
      let achieveValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        achieve_by: achieveValue,
      });
    } else {
      setFormValues({
        ...formValues,
        achieve_by: "",
      });
    }
  };

  const handleCreateGoal = () => {
    if (
      formValues.start_date !== "" &&
      formValues.end_date !== "" &&
      booksName.label !== "" &&
      formValues.achieve_by !== ""
    ) {
      setFormState({
        ...formState,
        buttonState: true,
        buttonText: "Register",
        spinner: true,
      });

      setValid(true);
    } else {
      setRequiredText("All fields are required");
    }
  };

  useEffect(() => {
    if (valid) {
      dispatch(
        addGoals({
          start_date: formValues.start_date,
          end_date: formValues.end_date,
          book_title: booksName.label,
          achieve_by: formValues.achieve_by,
        })
      );
    }

    return () => {
      setValid(false);
    };
  }, [valid]);

  useEffect(() => {
    if (addGoalsFailure === true) {
      setFormState({ ...initialFormState });
    }

    return () => {
      dispatch(restoreAddGoalsInitial());
    };
  }, [addGoalsFailure]);

  useEffect(() => {
    if (addGoalsSuccess === true) {
      setFormValues({ ...initialFormValues });
      setFormState({ ...initialFormState });
      setBooksName({});
      dispatch(fetchAllGoals());
    }

    return () => {
      dispatch(restoreAddGoalsInitial());
    };
  }, [addGoalsSuccess]);

  const [show, setShow] = useState(false);
  const [clickedId, setClickedId] = useState(null);
  const handleClose = () => {
    setShow(false);
  };

  const handleOpen = (id) => {
    setShow(true);
    setClickedId(id);
  };

  const handleDeleteGoal = (id) => {
    setTableState({
      ...tableState,
      buttonText: "Deleting...",
    });

    dispatch(deleteGoal(id));
  };

  useEffect(() => {
    if (deleteGoalsSuccess) {
      setTableState({ ...initialTableState });
      dispatch(fetchAllGoals());
    }

    return () => {
      dispatch(restoreDeleteGoalInitial());
    };
  }, [deleteGoalsSuccess]);

  useEffect(() => {
    if (deleteGoalsFailure) {
      setTableState({ ...initialTableState });
    }

    return () => {
      dispatch(restoreDeleteGoalInitial());
    };
  }, [deleteGoalsFailure]);

  useEffect(() => {
    dateTypeStart.current.max = formValues.end_date;
  }, [formValues.end_date]);

  return (
    <>
      <h4 className="reading-goals-h4">Add Goals</h4>
      <div className="reading-goals-form-wrapper">
        <p className="required_text">{requiredText}</p>

        <div className="date-input-wrapper">
          <input
            type="text"
            name="startDate"
            value={formValues.start_date}
            onFocus={() => handleDateTypeStart()}
            // onBlur={(e) =>handleDateTypeStartBlur(e)}
            className="reading-goals-input"
            ref={dateTypeStart}
            placeholder="Start Date*"
            onChange={(e) => startDateHandler(e)}
            required
            onKeyDown={(e) => e.preventDefault()}
          />
          <input
            type="text"
            name="endDate"
            value={formValues.end_date}
            placeholder="End Date*"
            onFocus={() => handleDateTypeEnd()}
            //   onBlur={(e) =>handleDateTypeEndBlur(e)}
            onChange={(e) => endDateHandler(e)}
            ref={dateTypeEnd}
            className="reading-goals-input"
            onKeyDown={(e) => e.preventDefault()}
          />
        </div>

        <div className="select-book-wrapper">
          <Select
            options={theBooks}
            styles={customStyles}
            placeholder={"Select Book"}
            onChange={(e) => booksHandler(e)}
          />
        </div>

        <div className="textfield-wrapper">
          <textarea
            className="reading-goals-text-area"
            name="textarea"
            placeholder="How do you intend to achieve this goal? eg 10 times daily, 5 times daily"
            onChange={(e) => achievedByHandler(e)}
            required
            value={formValues.achieve_by}
          />
        </div>

        <button
          disabled={formState.buttonState}
          onClick={() => handleCreateGoal()}
          className="reading-goal-btn"
        >
          {formState.spinner === true ? <Spinner /> : formState.buttonText}
        </button>
      </div>

      <h4 className="reading-goals-h4">All Goals</h4>

      <div className="table-wrapper">
        <table className="content-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Start</th>
              <th>End</th>
              <th>Days Remaining</th>
              <th>Socials</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allGoals.length !== 0 ? (
              allGoals.map((allGoal) => {
                return (
                  <tr key={allGoal.id}>
                    <td onClick={() => handleOpen(allGoal.id)}>{allGoal.content}</td>
                    <td>{moment(allGoal.start).format("MMM Do YYYY")}</td>
                    <td>{moment(allGoal.end).format("MMM Do YYYY")}</td>
                    <td>
                      {(new Date(allGoal.end).getTime() - new Date(allGoal.start).getTime()) /
                        (1000 * 3600 * 24)}
                    </td>
                    <td>
                      <div className="socials-icon">
                        <AiFillFacebook size={20} color="#78787d" />

                        <AiFillLinkedin size={20} color="#78787d" />

                        <AiFillTwitterSquare size={20} color="#78787d" />
                      </div>
                    </td>
                    <td>
                      <button className="table-btn" onClick={() => handleDeleteGoal(allGoal.id)}>
                        Delete <AiFillDelete size={12} color="red" />
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>No Goals Added</td>
                <td></td>
                <td></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Modal handleClose={handleClose} show={show} data={allGoals} clickedId={clickedId} />
    </>
  );
};

export default MyReadingGoals;
