import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import moment from 'moment';
import { backendUrl } from "../../utils/textDisplay";
import Button from "../button/Button";
import StarRating from "../partials/StarRating";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  px: 4,
	py: 1
};

export default (props) => {
	const { 
    name, 
    image_path, 
    event_date, 
    start_time, 
    end_time, 
    zoom_url, 
    open_chat_url,
    rating,
    open,
    setOpen
} = props;

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <img src={image_path&&(backendUrl+image_path)} 
            alt="event logo" 
            className="company-logo aspect-[3/2] border border-slate-200" 
        />
        <div className="flex w-full gap-2">
          <div className="flex items-start text-xs text-neutral-300 break-keep">戦略コンサル</div>
          <div className="flex items-center justify-center text-lg font-bold  break-keep">{name}</div>
        </div>
        <div className="flex justify-end w-full text-xs">
          <StarRating rating={rating}/>
        </div>
        <div className="text-center text-base">
          {moment(event_date).format('YYYY年MM月DD日')}{moment(start_time).format('hh:mm')+"~"+moment(end_time).format('hh:mm')}
        </div>
        <div className="mt-2">
          <div className="text-sm">参加用ZOOM</div>
          <Link to={zoom_url} className="ml-5 text-xs">{zoom_url}</Link>
        </div>
        <div className="mt-2">
          <div className="text-sm">オープンチャット</div>
          <Link to={open_chat_url} className="ml-5 text-xs" target="_blank">{open_chat_url}</Link>
        </div>
        <div className="flex flex-wrap justify-center gap-5 my-4">
          <Button 
            title="閉じる" 
            bgColor="bg-orange-400" 
            bgColorHover="bg-orange-700" 
            className="px-6 rounded-full py-0 text-xs" 
            onClick={()=>setOpen(false)}
          />
        </div>
      </Box>
    </Modal>
  )
}