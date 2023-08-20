import '../styling/PageNavigator.css'
import { PROBLEMS, PROBLEMS_PER_PAGE } from '../../BackendData/mockedData'

function PageNavigator({ getProb }) {

    const num_of_pages = Math.ceil(PROBLEMS.length / PROBLEMS_PER_PAGE);
    const pages = Array.from(Array(num_of_pages).keys())

    return (
        <div className='page_buttons'>
            {
                // To display  page buttons.
                pages.map((page_button_num) => {
                    return (<button key={page_button_num} onClick={() => getProb(page_button_num)} >{(page_button_num + 1)}</button>);
                })
            }
        </div>
    );
}

export default PageNavigator;