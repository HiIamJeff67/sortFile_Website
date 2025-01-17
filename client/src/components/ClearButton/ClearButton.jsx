import React, { useContext, useState } from 'react';
import PropTypes from "prop-types";

import { IoTrash, IoCheckmarkSharp } from "react-icons/io5";
import "./ClearButton.css";

import { FileSorterContext } from '../../context/FileSorterContext';

const ClearButton = ({
	toast
}) => {

	const {
		processedData, setProcessedData,
		setUploadFiles
	} = useContext(FileSorterContext);
	const [isClean, setIsClean] = useState(false);

	const handleClickClearButtn = function() {
		if (processedData.length === 0) {
			toast.error("There's nothing to clean up!");
			return;
		}
		toast.success("Cleared!")
		setIsClean(true);
		setProcessedData([]);
		setUploadFiles([]);
		setTimeout(() => setIsClean(false), 1500);
	}

  return (
    <button className='clear-btn'
						onClick={handleClickClearButtn}>
			{isClean
				? <><IoCheckmarkSharp/><p>Cleared</p></>
				: <><IoTrash/><p>Clear</p></>}
		</button>
  )
}

ClearButton.propTypes = {
	toast: PropTypes.func
}

export default ClearButton;