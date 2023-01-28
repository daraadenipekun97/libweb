// components
import Wrapper from "../components/readerComponents/header/Wrapper";
import Layout, { AutoLayout } from "../components/readerComponents/header/Layout";
import ControlBtn from "../components/readerComponents/header/ControlBtn";
import { AiFillLeftCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ReaderHeader = ({ onNavToggle, onOptionToggle, onLearningToggle }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <Layout>
        <AutoLayout>
          <div>
            <div className="backbutton" onClick={handleBack}>
              <p style={{ cursor: "pointer" }}>Back to Book</p>
            </div>
            <ControlBtn message="Contents" onClick={onNavToggle} /> &nbsp;
            <ControlBtn message="Share" onClick={onLearningToggle} />
            &nbsp;
            <ControlBtn message="Setting" onClick={onOptionToggle} /> &nbsp;
          </div>
        </AutoLayout>
      </Layout>
    </Wrapper>
  );
};

export default ReaderHeader;
