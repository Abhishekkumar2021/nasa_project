import React, { useContext, useState } from "react";
import styled from "styled-components";

import { BsFillCameraVideoFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import {
  AiOutlineCloudDownload,
  AiOutlineLoading3Quarters,
  AiOutlinePicture,
  AiTwotoneAudio,
} from "react-icons/ai";
import ThemeContext from "./ThemeContext";
import axios from "axios";
const StyledDiv = styled.div`
  position: relative;
  flex-grow: 1;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  .search {
    position: absolute;
    top: 10px;
    background: ${(props) => (props.light ? "white" : "#37383a")};
    width: fit-content;
    padding: 10px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0px 3px 6px rgb(0, 0, 0, 0.1);
    input{
      border: none;
      outline: none;
      padding: 5px;
      font-size: 20px;
      color: ${({ light }) =>
        light ? "rgba(0, 0, 0, 0.781)" : "rgb(256,256,256,0.8)"};
      background: ${(props) => (props.light ? "white" : "#37383a")};
    }
    .icon {
      font-size: 24px;
    }
  }

  .loading {
    font-size: 200px;
    animation: rotate 2s linear infinite;
    color: ${({ light }) => (light ? "#8484FF" : "skyblue")};
  }
  .data {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
    gap: 20px;
    .image,
    .video,
    .audio {
      display: flex;
      flex-direction: column;
      background: ${(props) => (props.light ? "white" : "#37383a")};
      width: 600px;
      border-radius: 10px;
      gap: 5px;
      max-width: 100%;
      box-shadow: 0 3px 5px rgb(0, 0, 0, 0.1);
      border: 10px solid ${(props) => (props.light ? "white" : "#37383a")};
      img,
      video {
        border-radius: 10px;
        width: 100%;
      }
      h2 {
        border-radius: 10px;
        text-align: center;
        transition: 0.3s ease all;
      }
      p {
        padding: 0 20px 20px 20px;
      }
    }
    .image {
      h2 {
        background: rgba(256, 256, 256, 0.2);
        padding: 20px;
        color: white;
        margin: 0 5px;
        margin-top: -86px;
        &:hover {
          background: ${(props) => (props.light ? "white" : "#37383a")};
          color: ${({ light }) => (light ? "#8484FF" : "skyblue")};
        }
      }
    }
    .video,
    .audio {
      h2 {
        padding: 10px 20px;
      }
    }
    h1 {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: center;
      color: ${({ light }) => (light ? "#8484FF" : "skyblue")};
      border-bottom: 1px solid ${({ light }) => (light ? "#8484FF" : "skyblue")};
      padding: 10px;
      .icon {
        margin-right: 10px;
      }
    }
    .audio {
      gap: 10px;
      width: 100%;
      align-items: center;
    }
    button{
      transition:0.3s ease all;
      display:flex;
      align-items:center;
      border-radius:30px;
      border: none;
      outline: none;
      padding: 10px 30px;
      font-size: 20px;
      box-shadow: 0 3px 5px rgb(0, 0, 0, 0.1);
      color: ${({ light }) =>
        light ? "rgba(0, 0, 0, 0.781)" : "rgb(256,256,256,0.8)"};
      background: ${(props) => (props.light ? "white" : "#37383a")};
      .icon {
        margin-right: 10px;
      }
      &:active{
        transform:scale(0.9);
      }
    }
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
`;

function NIVL() {
  const [light] = useContext(ThemeContext);
  const [value, setValue] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState({
    totalPage: 0,
    page: 1,
    images: [],
    videos: [],
    audios: [],
  });
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const fillData = async (id) => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://images-api.nasa.gov/search?q=${value}&page=${data.page}`
      );
      const toReturn = res.data.collection;
      return toReturn;
    };
    const dataRes = await fetchData();
    const fetchMedia = async (url) => {
      const res = await axios.get(url);
      const toReturn = res.data;
      return toReturn;
    };
    let totalPage, page;
    page = data.page + 1;
    totalPage = parseInt(dataRes.metadata.total_hits / 100);
    let images = [];
    let videos = [];
    let audios = [];
    for (let item of dataRes.items) {
      const mediaRes = await fetchMedia(item.href);
      const type = item.data[0].media_type;
      if (type === "image") {
        const href = mediaRes.find((href) => href.includes("orig.jpg"));
        if (href)
          images.push({
            src: href,
            title: item.data[0].title,
            des: item.data[0].description || item.data[0].description_508,
          });
      }
      if (type === "video") {
        const href = mediaRes.find((href) => href.includes("orig.mp4"));
        if (href)
          videos.push({
            src: href,
            title: item.data[0].title,
            des: item.data[0].description || item.data[0].description_508,
          });
      }
      if (type === "audio") {
        const href = mediaRes.find((href) => href.includes("orig.mp3"));
        if (href)
          audios.push({
            src: href,
            title: item.data[0].title,
            des: item.data[0].description || item.data[0].description_508,
          });
      }
      if (id === "initial")
        setData({
          totalPage,
          page,
          images,
          videos,
          audios,
        });
      else
        setData({
          totalPage,
          page,
          images: [...data.images, ...images],
          videos: [...data.videos, ...videos],
          audios: [...data.audios, ...audios],
        });
      setLoading(false);
    }
  };
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    fillData("initial");
  };

  const handleClick = ()=>{
    fillData("not-initial");
  }
  return (
    <StyledDiv light={light}>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search here.."
          value={value}
          onChange={handleChange}
        />
        <BiSearchAlt className="icon" />
      </form>
      {isLoading ? (
        <AiOutlineLoading3Quarters className="loading"></AiOutlineLoading3Quarters>
      ) : (
        <div className="data">
          {data.images.length !== 0 && (
            <h1>
              <AiOutlinePicture className="icon" /> The image data from NASA
            </h1>
          )}

          {data.images.map((item,idx) => (
            <div className="image" key={idx}>
              <img src={item.src} alt="images from nasa" />
              <h2>{item.title}</h2>
              <p>{item.des}</p>
            </div>
          ))}
          {data.videos.length !== 0 && (
            <h1>
              <BsFillCameraVideoFill className="icon" />
              The video data from NASA
            </h1>
          )}
          {data.videos.map((item,idx) => (
            <div className="video" key={idx}>
              <video controls>
                <source src={item.src} />
              </video>
              <h2>{item.title}</h2>
              <p>{item.des}</p>
            </div>
          ))}
          {data.audios.length !== 0 && (
            <h1>
              <AiTwotoneAudio className="icon" /> The audio data from NASA
            </h1>
          )}
          {data.audios.map((item,idx) => (
            <div className="audio" key={idx}>
              <audio controls>
                <source src={item.src} />
              </audio>
              <h2>{item.title}</h2>
              <p>{item.des}</p>
            </div>
          ))}
          {data.page < data.totalPage && (
            <button onClick={handleClick}>
              <AiOutlineCloudDownload className="icon" /> Load more data
            </button>
          )}
        </div>
      )}
    </StyledDiv>
  );
}

export default NIVL;