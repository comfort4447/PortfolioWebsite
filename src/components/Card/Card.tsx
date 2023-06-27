import React, { useEffect, useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";
import axios, { AxiosError } from 'axios';
import { UilTimes } from "@iconscout/react-unicons";



interface CardProps {
  param: {
    png: any;
    color: {
      backGround: string;
      boxShadow: string;
    };
    title: string;
    // value: string;
  };
}

const Card: React.FC<CardProps> = (props) => {
  const { param } = props;
  const Png = param.png;
  const [accountData, setAccountData] = useState<any>(null);
  const access_token = localStorage.getItem('access_token');
  const id = localStorage.getItem('id');
  const baseURL = `http://localhost:4000/Accounts/${id}`;

  useEffect(() => {
    fetchAccountData();
  }, []);

  const fetchAccountData = async () => {
    try {
      const response = await axios.get(baseURL, {
        headers: {
          Authorization: `Bearer ${access_token}`
        },
      });
      setAccountData(response.data);
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        console.log(axiosError.response.data);
      }
    }
  };

  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
    >
      <div className="radialBar">
        {/* <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        /> */}
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        {/* Display the account balance */}
        <span>{accountData?.balance}</span>
      </div>
    </motion.div>
  );
};

export default Card;
