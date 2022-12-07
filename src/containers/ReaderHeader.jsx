// components
import Wrapper from '../components/readerComponents/header/Wrapper'
import Layout, { AutoLayout } from '../components/readerComponents/header/Layout'
import ControlBtn from '../components/readerComponents/header/ControlBtn'

const ReaderHeader = ({
  onNavToggle, 
  onOptionToggle, 
  onLearningToggle
}) => {
  return (
    <Wrapper>
      <Layout>
        <AutoLayout>
          <div>
            <ControlBtn message="Contents" onClick={onNavToggle} />
            {/* <ControlBtn message="Setting" onClick={onOptionToggle} /> */}
            {/* <ControlBtn message="Highlights" onClick={onLearningToggle} /> */}
          </div>
        </AutoLayout>
      </Layout>
    </Wrapper>
  );
}



export default ReaderHeader