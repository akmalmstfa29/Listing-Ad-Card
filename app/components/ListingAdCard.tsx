"use client";

import React from "react";
import reactStringReplace from "react-string-replace";
import { v4 as uuidv4 } from 'uuid';
import styled from "styled-components";
import { Property } from "../interfaces";
import { hidePhoneNumber, updateQueryString, USDFormat } from "../utils/helpers";
import Image from 'next/image'

type ListingAdCardProps = {
  data: Property
}

const Wrapper = styled.div`
  font-style: normal;
  text-align: center;
  max-width: 544px;
  position: relative;
  box-shadow: 0px 4px 16px rgba(11, 17, 52, 0.2);
  border-radius: 4px;
  transition: background-image 0.5s ease-in-out;
  margin: 10px;
`

const MainPicWrapper = styled.div`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 544px;
  height: 272px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px 4px 0px 0px;

  &:hover {
    box-shadow: 0 0 200px rgba(0, 0, 0, 0.8) inset;
    cursor: pointer;
  }

  .arrow {
    width: 16px;
    height: 28px;
  }
`

const LaunchingSoonFlag = styled(Image)`
  position: absolute;
  top: 6px;
  left: -4px;
  width: 134px;
  height: auto;
`

const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 10%;
`

const MainContent  = styled.div`
  padding: 24px;
`

const ContentHeader  = styled.div`
  display: flex;
  justify-content: space-between;

  .titleSection {
    display: flex;
    align-items: center;

    .titleIconWrapper {
      background-color: #98bafc;
      border-radius: 12px;
      justify-content: center;
      align-items: center;
      padding: 9px 10px 5px;
    }

    .buildingIcon {
      width: 22px;
      height: 22px;
      
      @media screen and (max-width: 500px) {
        width: 20px;
        height: 20px;
      }
    }

    .titleWrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin-left: 16px;

      .title {
        font-size: 23px;
        margin: 0;
        margin-bottom: 4px;
        font-weight: 500;
        color: #1a2258;

        @media screen and (max-width: 500px) {
          font-size: 16px;
        }
      }
    }
  }

  .priceWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin-left: 16px;
    
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
`

const Configuration  = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  margin-top: 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #1a2258;

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`

const PriceWrapperMobile  = styled.div`
  display: none;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  margin-top: 12px;

  .psf {
    font-size: 16px;
  }
  
  @media screen and (max-width: 500px) {
    display: flex;
  }
`

const DescriptionToggleWrapper  = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`

const DescriptionWrapper  = styled.div`
`

const SubText = styled.span`
  font-size: 12px;
`

const PreShipmentFinancing = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  line-height: 26px;
  color: #1a2258;

  @media screen and (max-width: 345px) {
    font-size: 14px;
  }
`

const DescriptionToggle  = styled.button`
  background-color: transparent;
  border: 0;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  font-weight: 600;
  color: #216bff;
  padding: 0;
  cursor: pointer;
`

const Description  = styled.p`
  font-size: 14px;

  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`

const ListingAdCard = ({ data }: ListingAdCardProps) => {
  const {
    pic,
    title,
    address,
    psf_min,
    psf_max,
    subprice_label,
    project_type,
    year,
    ownership_type,
    availabilities_label,
    description
  } = data;
  const launchingPageFlag = require("../assets/images/Flag.png");
  const arrowRight = require("../assets/icons/chevron-right.png");
  const arrowLeft = require("../assets/icons/chevron-left.png");
  const buildingIcon = require("../assets/icons/building.png");
  const secureDescription = reactStringReplace(hidePhoneNumber(description), "\n", () => <br key={uuidv4()} />)

  const [showDescription, setShowDescription] = React.useState(true);
  const [showArrow, setShowArrow] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  React.useEffect(() => {
    setShowDescription(false);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pic.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + pic.length) % pic.length);
  };

  const thumbnail = () => {
    let updatedUrl;
    if (wrapperRef.current) {
      const wrapperWidth = wrapperRef.current.offsetWidth;
      updatedUrl = updateQueryString(pic[currentImageIndex], { w: String(wrapperWidth) });
    }

    return updatedUrl;
  };

  return (
    <Wrapper ref={wrapperRef}>
      <MainPicWrapper
        className="mainPic"
        style={{
          backgroundImage: `url(${thumbnail() ?? updateQueryString(pic[0], { w: String(544) })})`
        }}
        onMouseEnter={() => setShowArrow(true)}
        onMouseLeave={() => setShowArrow(false)}
      >
        <Arrow onClick={prevImage}>
          <Image
            className="arrow"
            style={{ display: showArrow ? "block" : "none" }}
            src={arrowLeft}
            alt="arrowLeft"
          />
        </Arrow>
        <Arrow onClick={nextImage}>
          <Image
            className="arrow"
            style={{ display: showArrow ? "block" : "none" }}
            src={arrowRight}
            alt="arrowRight"
          />
        </Arrow>
      </MainPicWrapper>
      <LaunchingSoonFlag
        className="launchingSoonFlag"
        src={launchingPageFlag}
        alt="launchingsoon"
      />
      <MainContent>
        <ContentHeader>
          <div className="titleSection">
            <div className="titleIconWrapper">
              <Image className="buildingIcon" src={buildingIcon} alt="building" />
            </div>
            <div className="titleWrapper">
              <h1 className="title">{title}</h1>
              <SubText>{address}</SubText>
            </div>
          </div>
          <div className="priceWrapper">
            <PreShipmentFinancing className="psf">
              {USDFormat(psf_min)} - {USDFormat(psf_max)} psf
            </PreShipmentFinancing>
            <SubText>{subprice_label}</SubText>
          </div>
        </ContentHeader>
        <Configuration>
          <span>
            {project_type} · {year} · {ownership_type}
          </span>
          <span>{availabilities_label}</span>
        </Configuration>
        <PriceWrapperMobile>
          <PreShipmentFinancing className="psf">
            {USDFormat(psf_min)} - {USDFormat(psf_max)} psf
          </PreShipmentFinancing>
          <SubText>{subprice_label}</SubText>
        </PriceWrapperMobile>
        <DescriptionToggleWrapper>
          <DescriptionToggle onClick={toggleDescription}>
            {showDescription ? "Hide" : "See"} description
          </DescriptionToggle>
        </DescriptionToggleWrapper>
        <DescriptionWrapper>
          {showDescription ? (
            <Description>{secureDescription}</Description>
          ) : null}
        </DescriptionWrapper>
      </MainContent>
    </Wrapper>
  );
}

export default ListingAdCard
