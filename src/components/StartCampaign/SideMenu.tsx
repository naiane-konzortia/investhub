import React, { useEffect, useMemo, useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useRedux } from "../../hooks";
import { setActivePage, setActiveTimelineStep } from "../../redux/actions";

export const SideMenu = () => {

  const { dispatch, useAppSelector } = useRedux();

  const { activePage } = useAppSelector((state) => ({
    activePage:state.Pages.activePage,
}))

  const [isFirstClicked, setIsFirstClicked] = useState(true);
  const [companyDetails, setCompanyDetails] = useState(false);
  const [securities, setSecurities] = useState(false);
  const [officers, setOfficers] = useState(false);
  const [holder, setHolders] = useState(false);
  const [legalDocuments, setLegalDocuments] = useState(false);
  const [banking, setBanking] = useState(false);

  const [legal, setLegal] = useState(false);
  const [campaing, setCampaign] = useState(false);
  const [overview, setOverview] = useState(false);
  const [terms, setTerms] = useState(false);
  const [teams, setTeams] = useState(false);
  const [updates, setUpdates] = useState(false);
  const [documents, setDocuments] = useState(false);
  const [investHub, setInvestHub] = useState(false);
  const [pitch, setPitch] = useState(false);
  const [review, setReview] = useState(false);

  return (
    <>
      <div className="side-menu">
        <div className="flex flex-col pt-10 pl-5 pb-3 mb-3 ">
          <div
            className={
              isFirstClicked
                ? `pointer font-noah-orange`
                : `pointer font-noah-black`
            }
          >
            {isFirstClicked ? (
              <>
                <div className="flex align-items-center">
                  <div
                    className="mt-1"
                    onClick={() => {
                      setIsFirstClicked(!isFirstClicked);
                      setLegal(false);
                      setCampaign(false);
                      setOverview(false);
                      setTerms(false);
                      setTeams(false);
                      setUpdates(false);
                      setDocuments(false);
                      setInvestHub(false);
                      setPitch(false);
                      setReview(false);
                    }}
                  >
                    <IoIosArrowDown />
                  </div>
                  <span
                    className="ml-2 mb-2"
                    onClick={() => {
                      setIsFirstClicked(!isFirstClicked);
                      setLegal(false);
                      setCampaign(false);
                      setOverview(false);
                      setTerms(false);
                      setTeams(false);
                      setUpdates(false);
                      setDocuments(false);
                      setInvestHub(false);
                      setPitch(false);
                      setReview(false);
                    }}
                  >
                    Company Information
                  </span>
                </div>
                <div className="flex flex-col">
                  <span
                    className={
                      (activePage !== 'company_details')
                        ? `mt-2 ml-8 font-noah-black-sm`
                        : `mt-2 ml-8 font-noah-orange-sm` 
                        
                    }
                    onClick={() => {
                    dispatch(setActivePage("company_details"))
                    }}
                  >
                    Company Details
                  </span>
                  <span
                    className={
                      (activePage !== 'company_securities')
                      ? `mt-2 ml-8 font-noah-black-sm`
                      : `mt-2 ml-8 font-noah-orange-sm` 
                    }
                    onClick={() => {
                        dispatch(setActivePage("company_securities"));
                        dispatch(setActiveTimelineStep(7));
                    }}
                  >
                    Company Securities
                  </span>
                  <span
                    className={
                      (activePage !== 'directors_officers')
                      ? `mt-2 ml-8 font-noah-black-sm`
                      : `mt-2 ml-8 font-noah-orange-sm` 
                    }
                    onClick={() => {
                        dispatch(setActivePage("directors_officers"))
                    }}
                  >
                    Directors and Officers
                  </span>
                  <span
                    className={
                      (activePage !== 'securities_holders')
                      ? `mt-2 ml-8 font-noah-black-sm`
                      : `mt-2 ml-8 font-noah-orange-sm` 
                    }
                    onClick={() => {
                        dispatch(setActivePage("securities_holders"))
                    }}
                  >
                    Principal Securities Holders
                  </span>
                  <span
                    className={
                      (activePage !== 'legal_documents')
                      ? `mt-2 ml-8 font-noah-black-sm`
                      : `mt-2 ml-8 font-noah-orange-sm` 
                    }
                    onClick={() => {
                        dispatch(setActivePage("legal_documents"))
                    }}
                  >
                    Legal Documents
                  </span>
                  <span
                    className={
                      (activePage !== 'banking')
                      ? `mt-2 ml-8 font-noah-black-sm`
                      : `mt-2 ml-8 font-noah-orange-sm` 
                    }
                    onClick={() => {
                        dispatch(setActivePage("banking"))
                    }}
                  >
                    Banking Information
                  </span>
                </div>
              </>
            ) : (
              <div className="flex align-items-center">
                <div
                  className="mt-1"
                  onClick={() => {
                    setIsFirstClicked(!isFirstClicked);
                    setLegal(false);
                    setCampaign(false);
                    setOverview(false);
                    setTerms(false);
                    setTeams(false);
                    setUpdates(false);
                    setDocuments(false);
                    setInvestHub(false);
                    setPitch(false);
                    setReview(false);
                  }}
                >
                  <IoIosArrowForward />
                </div>
                <span
                  className="ml-2 mb-2"
                  onClick={() => {
                    setIsFirstClicked(!isFirstClicked);
                    setLegal(false);
                    setCampaign(false);
                    setOverview(false);
                    setTerms(false);
                    setTeams(false);
                    setUpdates(false);
                    setDocuments(false);
                    setInvestHub(false);
                    setPitch(false);
                    setReview(false);
                  }}
                >
                  Company Information
                </span>
              </div>
            )}
          </div>
          <div
            className={
              legal
                ? `mt-2 pointer font-noah-orange`
                : `mt-2 pointer font-noah-black`
            }
          >
            {legal ? (
              <>
                <div className="flex align-items-center">
                  <div
                    className="mt-1"
                    onClick={() => {
                      setLegal(!legal);
                      setIsFirstClicked(false);
                      setCampaign(false);
                      setOverview(false);
                      setTerms(false);
                      setTeams(false);
                      setUpdates(false);
                      setDocuments(false);
                      setInvestHub(false);
                      setPitch(false);
                      setReview(false);
                    }}
                  >
                    <IoIosArrowDown />
                  </div>
                  <span
                    className="ml-2 mb-2"
                    onClick={() => {
                      setLegal(!legal);
                      setIsFirstClicked(false);
                      setCampaign(false);
                      setOverview(false);
                      setTerms(false);
                      setTeams(false);
                      setUpdates(false);
                      setDocuments(false);
                      setInvestHub(false);
                      setPitch(false);
                      setReview(false);
                    }}
                  >
                    Legal
                  </span>
                </div>
                <div className="flex flex-col">
                  {/* <span className={companyDetails ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setCompanyDetails(!companyDetails); setSecurities(false);setOfficers(false);setHolders(false);setLegalDocuments(false);setBanking(false)}}>Company Details</span>
                <span className={securities ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setSecurities(!securities); setCompanyDetails(false);setOfficers(false);setHolders(false);setLegalDocuments(false);setBanking(false)}}>Company Securities</span>
                <span className={officers ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setOfficers(!officers); setCompanyDetails(false);setSecurities(false);setHolders(false);setLegalDocuments(false);setBanking(false)}}>Directors and Officers</span>
                <span className={holder ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setHolders(!holder); setCompanyDetails(false);setOfficers(false);setSecurities(false);setLegalDocuments(false);setBanking(false)}}>Principal Securities Holders</span>
                <span className={legalDocuments ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setLegalDocuments(!legalDocuments); setHolders(false); setCompanyDetails(false);setOfficers(false);setSecurities(false);setBanking(false)}}>Legal Documents</span>
                <span className={banking ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setBanking(!banking); setLegalDocuments(false); setHolders(false); setCompanyDetails(false);setOfficers(false);setSecurities(false)}}>Banking Information</span> */}
                </div>
              </>
            ) : (
              <div className="flex align-items-center">
                <div
                  className="mt-1"
                  onClick={() => {
                    setLegal(!legal);
                    setIsFirstClicked(false);
                    setCampaign(false);
                    setOverview(false);
                    setTerms(false);
                    setTeams(false);
                    setUpdates(false);
                    setDocuments(false);
                    setInvestHub(false);
                    setPitch(false);
                    setReview(false);
                  }}
                >
                  <IoIosArrowForward />
                </div>
                <span
                  className="ml-2 mb-2"
                  onClick={() => {
                    setLegal(!legal);
                    setIsFirstClicked(false);
                    setCampaign(false);
                    setOverview(false);
                    setTerms(false);
                    setTeams(false);
                    setUpdates(false);
                    setDocuments(false);
                    setInvestHub(false);
                    setPitch(false);
                    setReview(false);
                  }}
                >
                  Legal
                </span>
              </div>
            )}
          </div>
          <div
            className={
              campaing
                ? `mt-2 pointer font-noah-orange`
                : `mt-2 pointer font-noah-black`
            }
          >
            {campaing ? (
              <>
                <div className="flex align-items-center">
                  <div
                    className="mt-1"
                    onClick={() => {
                      setLegal(false);
                      setIsFirstClicked(false);
                      setCampaign(!campaing);
                      setOverview(false);
                      setTerms(false);
                      setTeams(false);
                      setUpdates(false);
                      setDocuments(false);
                      setInvestHub(false);
                      setPitch(false);
                      setReview(false);
                    }}
                  >
                    <IoIosArrowDown />
                  </div>
                  <span
                    className="ml-2 mb-2"
                    onClick={() => {
                      setLegal(false);
                      setIsFirstClicked(false);
                      setCampaign(!campaing);
                      setOverview(false);
                      setTerms(false);
                      setTeams(false);
                      setUpdates(false);
                      setDocuments(false);
                      setInvestHub(false);
                      setPitch(false);
                      setReview(false);
                    }}
                  >
                    Campaign Header
                  </span>
                </div>
                <div className="flex flex-col">
                  {/* <span className={companyDetails ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setCompanyDetails(!companyDetails); setSecurities(false);setOfficers(false);setHolders(false);setLegalDocuments(false);setBanking(false)}}>Company Details</span>
                <span className={securities ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setSecurities(!securities); setCompanyDetails(false);setOfficers(false);setHolders(false);setLegalDocuments(false);setBanking(false)}}>Company Securities</span>
                <span className={officers ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setOfficers(!officers); setCompanyDetails(false);setSecurities(false);setHolders(false);setLegalDocuments(false);setBanking(false)}}>Directors and Officers</span>
                <span className={holder ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setHolders(!holder); setCompanyDetails(false);setOfficers(false);setSecurities(false);setLegalDocuments(false);setBanking(false)}}>Principal Securities Holders</span>
                <span className={legalDocuments ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setLegalDocuments(!legalDocuments); setHolders(false); setCompanyDetails(false);setOfficers(false);setSecurities(false);setBanking(false)}}>Legal Documents</span>
                <span className={banking ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setBanking(!banking); setLegalDocuments(false); setHolders(false); setCompanyDetails(false);setOfficers(false);setSecurities(false)}}>Banking Information</span> */}
                </div>
              </>
            ) : (
              <div className="flex align-items-center">
                <div
                  className="mt-1"
                  onClick={() => {
                    setLegal(false);
                    setIsFirstClicked(false);
                    setCampaign(!campaing);
                    setOverview(false);
                    setTerms(false);
                    setTeams(false);
                    setUpdates(false);
                    setDocuments(false);
                    setInvestHub(false);
                    setPitch(false);
                    setReview(false);
                  }}
                >
                  <IoIosArrowForward />
                </div>
                <span
                  className="ml-2 mb-2"
                  onClick={() => {
                    setLegal(false);
                    setIsFirstClicked(false);
                    setCampaign(!campaing);
                    setOverview(false);
                    setTerms(false);
                    setTeams(false);
                    setUpdates(false);
                    setDocuments(false);
                    setInvestHub(false);
                    setPitch(false);
                    setReview(false);
                  }}
                >
                  Campaign Header
                </span>
              </div>
            )}
          </div>
          <div
            className={
              overview
                ? `mt-2 pointer font-noah-orange`
                : `mt-2 pointer font-noah-black`
            }
          >
            {overview ? (
              <>
                <div className="flex align-items-center">
                  <div
                    className="mt-1"
                    onClick={() => {
                      setLegal(false);
                      setIsFirstClicked(false);
                      setCampaign(false);
                      setOverview(!overview);
                      setTerms(false);
                      setTeams(false);
                      setUpdates(false);
                      setDocuments(false);
                      setInvestHub(false);
                      setPitch(false);
                      setReview(false);
                    }}
                  >
                    <IoIosArrowDown />
                  </div>
                  <span
                    className="ml-2 mb-2"
                    onClick={() => {
                      setLegal(false);
                      setIsFirstClicked(false);
                      setCampaign(false);
                      setOverview(!overview);
                      setTerms(false);
                      setTeams(false);
                      setUpdates(false);
                      setDocuments(false);
                      setInvestHub(false);
                      setPitch(false);
                      setReview(false);
                    }}
                  >
                    Overview
                  </span>
                </div>
                <div className="flex flex-col">
                  {/* <span className={companyDetails ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setCompanyDetails(!companyDetails); setSecurities(false);setOfficers(false);setHolders(false);setLegalDocuments(false);setBanking(false)}}>Company Details</span>
                <span className={securities ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setSecurities(!securities); setCompanyDetails(false);setOfficers(false);setHolders(false);setLegalDocuments(false);setBanking(false)}}>Company Securities</span>
                <span className={officers ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setOfficers(!officers); setCompanyDetails(false);setSecurities(false);setHolders(false);setLegalDocuments(false);setBanking(false)}}>Directors and Officers</span>
                <span className={holder ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setHolders(!holder); setCompanyDetails(false);setOfficers(false);setSecurities(false);setLegalDocuments(false);setBanking(false)}}>Principal Securities Holders</span>
                <span className={legalDocuments ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setLegalDocuments(!legalDocuments); setHolders(false); setCompanyDetails(false);setOfficers(false);setSecurities(false);setBanking(false)}}>Legal Documents</span>
                <span className={banking ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setBanking(!banking); setLegalDocuments(false); setHolders(false); setCompanyDetails(false);setOfficers(false);setSecurities(false)}}>Banking Information</span> */}
                </div>
              </>
            ) : (
              <div className="flex align-items-center">
                <div
                  className="mt-1"
                  onClick={() => {
                    setLegal(false);
                    setIsFirstClicked(false);
                    setCampaign(false);
                    setOverview(!overview);
                    setTerms(false);
                    setTeams(false);
                    setUpdates(false);
                    setDocuments(false);
                    setInvestHub(false);
                    setPitch(false);
                    setReview(false);
                  }}
                >
                  <IoIosArrowForward />
                </div>
                <span
                  className="ml-2 mb-2"
                  onClick={() => {
                    setLegal(false);
                    setIsFirstClicked(false);
                    setCampaign(false);
                    setOverview(!overview);
                    setTerms(false);
                    setTeams(false);
                    setUpdates(false);
                    setDocuments(false);
                    setInvestHub(false);
                    setPitch(false);
                    setReview(false);
                  }}
                >
                  Overview
                </span>
              </div>
            )}
          </div>
          <div
            className={
              terms
                ? `mt-2 pointer font-noah-orange`
                : `mt-2 pointer font-noah-black`
            }
          >
            {terms ? (
              <>
                <div className="flex align-items-center">
                  <div
                    className="mt-1"
                    onClick={() => {
                      setLegal(false);
                      setIsFirstClicked(false);
                      setCampaign(false);
                      setOverview(false);
                      setTerms(!terms);
                      setTeams(false);
                      setUpdates(false);
                      setDocuments(false);
                      setInvestHub(false);
                      setPitch(false);
                      setReview(false);
                    }}
                  >
                    <IoIosArrowDown />
                  </div>
                  <span
                    className="ml-2 mb-2"
                    onClick={() => {
                      setLegal(false);
                      setIsFirstClicked(false);
                      setCampaign(false);
                      setOverview(false);
                      setTerms(!terms);
                      setTeams(false);
                      setUpdates(false);
                      setDocuments(false);
                      setInvestHub(false);
                      setPitch(false);
                      setReview(false);
                    }}
                  >
                    Terms
                  </span>
                </div>
                <div className="flex flex-col">
                  {/* <span className={companyDetails ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setCompanyDetails(!companyDetails); setSecurities(false);setOfficers(false);setHolders(false);setLegalDocuments(false);setBanking(false)}}>Company Details</span>
                <span className={securities ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setSecurities(!securities); setCompanyDetails(false);setOfficers(false);setHolders(false);setLegalDocuments(false);setBanking(false)}}>Company Securities</span>
                <span className={officers ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setOfficers(!officers); setCompanyDetails(false);setSecurities(false);setHolders(false);setLegalDocuments(false);setBanking(false)}}>Directors and Officers</span>
                <span className={holder ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setHolders(!holder); setCompanyDetails(false);setOfficers(false);setSecurities(false);setLegalDocuments(false);setBanking(false)}}>Principal Securities Holders</span>
                <span className={legalDocuments ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setLegalDocuments(!legalDocuments); setHolders(false); setCompanyDetails(false);setOfficers(false);setSecurities(false);setBanking(false)}}>Legal Documents</span>
                <span className={banking ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setBanking(!banking); setLegalDocuments(false); setHolders(false); setCompanyDetails(false);setOfficers(false);setSecurities(false)}}>Banking Information</span> */}
                </div>
              </>
            ) : (
              <div className="flex align-items-center">
                <div
                  className="mt-1"
                  onClick={() => {
                    setLegal(false);
                    setIsFirstClicked(false);
                    setCampaign(false);
                    setTerms(false);
                    setTerms(!terms);
                    setTeams(false);
                    setUpdates(false);
                    setDocuments(false);
                    setInvestHub(false);
                    setPitch(false);
                    setReview(false);
                  }}
                >
                  <IoIosArrowForward />
                </div>
                <span
                  className="ml-2 mb-2"
                  onClick={() => {
                    setLegal(false);
                    setIsFirstClicked(false);
                    setCampaign(false);
                    setOverview(false);
                    setTerms(!terms);
                    setTeams(false);
                    setUpdates(false);
                    setDocuments(false);
                    setInvestHub(false);
                    setPitch(false);
                    setReview(false);
                  }}
                >
                  Terms
                </span>
              </div>
            )}
          </div>
          <div
            className={
              teams
                ? `mt-2 pointer font-noah-orange`
                : `mt-2 pointer font-noah-black`
            }
          >
            {teams ? (
              <>
                <div className="flex align-items-center">
                  <div
                    className="mt-1"
                    onClick={() => {
                      setLegal(false);
                      setIsFirstClicked(false);
                      setCampaign(false);
                      setOverview(false);
                      setTerms(false);
                      setTeams(!teams);
                      setUpdates(false);
                      setDocuments(false);
                      setInvestHub(false);
                      setPitch(false);
                      setReview(false);
                    }}
                  >
                    <IoIosArrowDown />
                  </div>
                  <span
                    className="ml-2 mb-2"
                    onClick={() => {
                      setLegal(false);
                      setIsFirstClicked(false);
                      setCampaign(false);
                      setOverview(false);
                      setTerms(false);
                      setTeams(!teams);
                      setUpdates(false);
                      setDocuments(false);
                      setInvestHub(false);
                      setPitch(false);
                      setReview(false);
                    }}
                  >
                    Teams
                  </span>
                </div>
                <div className="flex flex-col">
                  {/* <span className={companyDetails ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setCompanyDetails(!companyDetails); setSecurities(false);setOfficers(false);setHolders(false);setLegalDocuments(false);setBanking(false)}}>Company Details</span>
                <span className={securities ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setSecurities(!securities); setCompanyDetails(false);setOfficers(false);setHolders(false);setLegalDocuments(false);setBanking(false)}}>Company Securities</span>
                <span className={officers ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setOfficers(!officers); setCompanyDetails(false);setSecurities(false);setHolders(false);setLegalDocuments(false);setBanking(false)}}>Directors and Officers</span>
                <span className={holder ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setHolders(!holder); setCompanyDetails(false);setOfficers(false);setSecurities(false);setLegalDocuments(false);setBanking(false)}}>Principal Securities Holders</span>
                <span className={legalDocuments ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setLegalDocuments(!legalDocuments); setHolders(false); setCompanyDetails(false);setOfficers(false);setSecurities(false);setBanking(false)}}>Legal Documents</span>
                <span className={banking ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setBanking(!banking); setLegalDocuments(false); setHolders(false); setCompanyDetails(false);setOfficers(false);setSecurities(false)}}>Banking Information</span> */}
                </div>
              </>
            ) : (
              <div className="flex align-items-center">
                <div
                  className="mt-1"
                  onClick={() => {
                    setLegal(false);
                    setIsFirstClicked(false);
                    setCampaign(false);
                    setTerms(false);
                    setTerms(false);
                    setTeams(!teams);
                    setUpdates(false);
                    setDocuments(false);
                    setInvestHub(false);
                    setPitch(false);
                    setReview(false);
                  }}
                >
                  <IoIosArrowForward />
                </div>
                <span
                  className="ml-2 mb-2"
                  onClick={() => {
                    setLegal(false);
                    setIsFirstClicked(false);
                    setCampaign(false);
                    setOverview(false);
                    setTerms(false);
                    setTeams(!teams);
                    setUpdates(false);
                    setDocuments(false);
                    setInvestHub(false);
                    setPitch(false);
                    setReview(false);
                  }}
                >
                  Teams
                </span>
              </div>
            )}
          </div>
          <div
            className={
              updates
                ? `mt-2 pointer font-noah-orange`
                : `mt-2 pointer font-noah-black`
            }
          >
            {updates ? (
              <>
                <div className="flex align-items-center">
                  <div
                    className="mt-1"
                    onClick={() => {
                      setLegal(false);
                      setIsFirstClicked(false);
                      setCampaign(false);
                      setOverview(false);
                      setTerms(false);
                      setTeams(false);
                      setUpdates(!updates);
                      setDocuments(false);
                      setInvestHub(false);
                      setPitch(false);
                      setReview(false);
                    }}
                  >
                    <IoIosArrowDown />
                  </div>
                  <span
                    className="ml-2 mb-2"
                    onClick={() => {
                      setLegal(false);
                      setIsFirstClicked(false);
                      setCampaign(false);
                      setOverview(false);
                      setTerms(false);
                      setTeams(false);
                      setUpdates(!updates);
                      setDocuments(false);
                      setInvestHub(false);
                      setPitch(false);
                      setReview(false);
                    }}
                  >
                    Updates
                  </span>
                </div>
                <div className="flex flex-col">
                  {/* <span className={companyDetails ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setCompanyDetails(!companyDetails); setSecurities(false);setOfficers(false);setHolders(false);setLegalDocuments(false);setBanking(false)}}>Company Details</span>
                <span className={securities ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setSecurities(!securities); setCompanyDetails(false);setOfficers(false);setHolders(false);setLegalDocuments(false);setBanking(false)}}>Company Securities</span>
                <span className={officers ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setOfficers(!officers); setCompanyDetails(false);setSecurities(false);setHolders(false);setLegalDocuments(false);setBanking(false)}}>Directors and Officers</span>
                <span className={holder ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setHolders(!holder); setCompanyDetails(false);setOfficers(false);setSecurities(false);setLegalDocuments(false);setBanking(false)}}>Principal Securities Holders</span>
                <span className={legalDocuments ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setLegalDocuments(!legalDocuments); setHolders(false); setCompanyDetails(false);setOfficers(false);setSecurities(false);setBanking(false)}}>Legal Documents</span>
                <span className={banking ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setBanking(!banking); setLegalDocuments(false); setHolders(false); setCompanyDetails(false);setOfficers(false);setSecurities(false)}}>Banking Information</span> */}
                </div>
              </>
            ) : (
              <div className="flex align-items-center">
                <div
                  className="mt-1"
                  onClick={() => {
                    setLegal(false);
                    setIsFirstClicked(false);
                    setCampaign(false);
                    setTerms(false);
                    setTerms(false);
                    setTeams(false);
                    setUpdates(!updates);
                    setDocuments(false);
                    setInvestHub(false);
                    setPitch(false);
                    setReview(false);
                  }}
                >
                  <IoIosArrowForward />
                </div>
                <span
                  className="ml-2 mb-2"
                  onClick={() => {
                    setLegal(false);
                    setIsFirstClicked(false);
                    setCampaign(false);
                    setOverview(false);
                    setTerms(false);
                    setTeams(false);
                    setUpdates(!updates);
                    setDocuments(false);
                    setInvestHub(false);
                    setPitch(false);
                    setReview(false);
                  }}
                >
                  Updates
                </span>
              </div>
            )}
          </div>
          <div
            className={
              documents
                ? `mt-2 pointer font-noah-orange`
                : `mt-2 pointer font-noah-black`
            }
          >
            {documents ? (
              <>
                <div className="flex align-items-center">
                  <div
                    className="mt-1"
                    onClick={() => {
                      setLegal(false);
                      setIsFirstClicked(false);
                      setCampaign(false);
                      setOverview(false);
                      setTerms(false);
                      setTeams(false);
                      setUpdates(false);
                      setDocuments(!documents);
                      setInvestHub(false);
                      setPitch(false);
                      setReview(false);
                    }}
                  >
                    <IoIosArrowDown />
                  </div>
                  <span
                    className="ml-2 mb-2"
                    onClick={() => {
                      setLegal(false);
                      setIsFirstClicked(false);
                      setCampaign(false);
                      setOverview(false);
                      setTerms(false);
                      setTeams(false);
                      setUpdates(false);
                      setDocuments(!documents);
                      setInvestHub(false);
                      setPitch(false);
                      setReview(false);
                    }}
                  >
                    Documents
                  </span>
                </div>
                <div className="flex flex-col">
                  {/* <span className={companyDetails ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setCompanyDetails(!companyDetails); setSecurities(false);setOfficers(false);setHolders(false);setLegalDocuments(false);setBanking(false)}}>Company Details</span>
                <span className={securities ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setSecurities(!securities); setCompanyDetails(false);setOfficers(false);setHolders(false);setLegalDocuments(false);setBanking(false)}}>Company Securities</span>
                <span className={officers ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setOfficers(!officers); setCompanyDetails(false);setSecurities(false);setHolders(false);setLegalDocuments(false);setBanking(false)}}>Directors and Officers</span>
                <span className={holder ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setHolders(!holder); setCompanyDetails(false);setOfficers(false);setSecurities(false);setLegalDocuments(false);setBanking(false)}}>Principal Securities Holders</span>
                <span className={legalDocuments ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setLegalDocuments(!legalDocuments); setHolders(false); setCompanyDetails(false);setOfficers(false);setSecurities(false);setBanking(false)}}>Legal Documents</span>
                <span className={banking ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setBanking(!banking); setLegalDocuments(false); setHolders(false); setCompanyDetails(false);setOfficers(false);setSecurities(false)}}>Banking Information</span> */}
                </div>
              </>
            ) : (
              <div className="flex align-items-center">
                <div
                  className="mt-1"
                  onClick={() => {
                    setLegal(false);
                    setIsFirstClicked(false);
                    setCampaign(false);
                    setTerms(false);
                    setTerms(false);
                    setTeams(false);
                    setUpdates(false);
                    setDocuments(!documents);
                    setInvestHub(false);
                    setPitch(false);
                    setReview(false);
                  }}
                >
                  <IoIosArrowForward />
                </div>
                <span
                  className="ml-2 mb-2"
                  onClick={() => {
                    setLegal(false);
                    setIsFirstClicked(false);
                    setCampaign(false);
                    setOverview(false);
                    setTerms(false);
                    setTeams(false);
                    setUpdates(false);
                    setDocuments(!documents);
                    setInvestHub(false);
                    setPitch(false);
                    setReview(false);
                  }}
                >
                  Documents
                </span>
              </div>
            )}
          </div>
          <div
            className={
              investHub
                ? `mt-2 pointer font-noah-orange`
                : `mt-2 pointer font-noah-black`
            }
          >
            {investHub ? (
              <>
                <div className="flex align-items-center">
                  <div
                    className="mt-1"
                    onClick={() => {
                      setLegal(false);
                      setIsFirstClicked(false);
                      setCampaign(false);
                      setOverview(false);
                      setTerms(false);
                      setTeams(false);
                      setUpdates(false);
                      setDocuments(false);
                      setInvestHub(!investHub);
                      setPitch(false);
                      setReview(false);
                    }}
                  >
                    <IoIosArrowDown />
                  </div>
                  <span
                    className="ml-2 mb-2"
                    onClick={() => {
                      setLegal(false);
                      setIsFirstClicked(false);
                      setCampaign(false);
                      setOverview(false);
                      setTerms(false);
                      setTeams(false);
                      setUpdates(false);
                      setDocuments(false);
                      setInvestHub(!investHub);
                      setPitch(false);
                      setReview(false);
                    }}
                  >
                    InvestHubConnects
                  </span>
                </div>
                <div className="flex flex-col">
                  {/* <span className={companyDetails ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setCompanyDetails(!companyDetails); setSecurities(false);setOfficers(false);setHolders(false);setLegalDocuments(false);setBanking(false)}}>Company Details</span>
                <span className={securities ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setSecurities(!securities); setCompanyDetails(false);setOfficers(false);setHolders(false);setLegalDocuments(false);setBanking(false)}}>Company Securities</span>
                <span className={officers ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setOfficers(!officers); setCompanyDetails(false);setSecurities(false);setHolders(false);setLegalDocuments(false);setBanking(false)}}>Directors and Officers</span>
                <span className={holder ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setHolders(!holder); setCompanyDetails(false);setOfficers(false);setSecurities(false);setLegalDocuments(false);setBanking(false)}}>Principal Securities Holders</span>
                <span className={legalDocuments ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setLegalDocuments(!legalDocuments); setHolders(false); setCompanyDetails(false);setOfficers(false);setSecurities(false);setBanking(false)}}>Legal Documents</span>
                <span className={banking ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setBanking(!banking); setLegalDocuments(false); setHolders(false); setCompanyDetails(false);setOfficers(false);setSecurities(false)}}>Banking Information</span> */}
                </div>
              </>
            ) : (
              <div className="flex align-items-center">
                <div
                  className="mt-1"
                  onClick={() => {
                    setLegal(false);
                    setIsFirstClicked(false);
                    setCampaign(false);
                    setTerms(false);
                    setTerms(false);
                    setTeams(false);
                    setUpdates(false);
                    setDocuments(false);
                    setInvestHub(!investHub);
                    setPitch(false);
                    setReview(false);
                  }}
                >
                  <IoIosArrowForward />
                </div>
                <span
                  className="ml-2 mb-2"
                  onClick={() => {
                    setLegal(false);
                    setIsFirstClicked(false);
                    setCampaign(false);
                    setOverview(false);
                    setTerms(false);
                    setTeams(false);
                    setUpdates(false);
                    setDocuments(false);
                    setInvestHub(!investHub);
                    setPitch(false);
                    setReview(false);
                  }}
                >
                  InvestHubConnects
                </span>
              </div>
            )}
          </div>
          <div
            className={
              pitch
                ? `mt-2 pointer font-noah-orange`
                : `mt-2 pointer font-noah-black`
            }
          >
            {pitch ? (
              <>
                <div className="flex align-items-center">
                  <div
                    className="mt-1"
                    onClick={() => {
                      setLegal(false);
                      setIsFirstClicked(false);
                      setCampaign(false);
                      setOverview(false);
                      setTerms(false);
                      setTeams(false);
                      setUpdates(false);
                      setDocuments(false);
                      setInvestHub(false);
                      setPitch(!pitch);
                      setReview(false);
                    }}
                  >
                    <IoIosArrowDown />
                  </div>
                  <span
                    className="ml-2 mb-2"
                    onClick={() => {
                      setLegal(false);
                      setIsFirstClicked(false);
                      setCampaign(false);
                      setOverview(false);
                      setTerms(false);
                      setTeams(false);
                      setUpdates(false);
                      setDocuments(false);
                      setInvestHub(false);
                      setPitch(!pitch);
                      setReview(false);
                    }}
                  >
                    {" "}
                    Pitch (Preview)
                  </span>
                </div>
                <div className="flex flex-col">
                  {/* <span className={companyDetails ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setCompanyDetails(!companyDetails); setSecurities(false);setOfficers(false);setHolders(false);setLegalDocuments(false);setBanking(false)}}>Company Details</span>
                <span className={securities ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setSecurities(!securities); setCompanyDetails(false);setOfficers(false);setHolders(false);setLegalDocuments(false);setBanking(false)}}>Company Securities</span>
                <span className={officers ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setOfficers(!officers); setCompanyDetails(false);setSecurities(false);setHolders(false);setLegalDocuments(false);setBanking(false)}}>Directors and Officers</span>
                <span className={holder ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setHolders(!holder); setCompanyDetails(false);setOfficers(false);setSecurities(false);setLegalDocuments(false);setBanking(false)}}>Principal Securities Holders</span>
                <span className={legalDocuments ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setLegalDocuments(!legalDocuments); setHolders(false); setCompanyDetails(false);setOfficers(false);setSecurities(false);setBanking(false)}}>Legal Documents</span>
                <span className={banking ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setBanking(!banking); setLegalDocuments(false); setHolders(false); setCompanyDetails(false);setOfficers(false);setSecurities(false)}}>Banking Information</span> */}
                </div>
              </>
            ) : (
              <div className="flex align-items-center">
                <div
                  className="mt-1"
                  onClick={() => {
                    setLegal(false);
                    setIsFirstClicked(false);
                    setCampaign(false);
                    setTerms(false);
                    setTerms(false);
                    setTeams(false);
                    setUpdates(false);
                    setDocuments(false);
                    setInvestHub(false);
                    setPitch(!pitch);
                    setReview(false);
                  }}
                >
                  <IoIosArrowForward />
                </div>
                <span
                  className="ml-2 mb-2"
                  onClick={() => {
                    setLegal(false);
                    setIsFirstClicked(false);
                    setCampaign(false);
                    setOverview(false);
                    setTerms(false);
                    setTeams(false);
                    setUpdates(false);
                    setDocuments(false);
                    setInvestHub(false);
                    setPitch(!pitch);
                    setReview(false);
                  }}
                >
                  Pitch (Preview)
                </span>
              </div>
            )}
          </div>
          <div
            className={
              review
                ? `mt-2 pointer font-noah-orange`
                : `mt-2 pointer font-noah-black`
            }
          >
            {review ? (
              <>
                <div className="flex align-items-center">
                  <div
                    className="mt-1"
                    onClick={() => {
                      setLegal(false);
                      setIsFirstClicked(false);
                      setCampaign(false);
                      setOverview(false);
                      setTerms(false);
                      setTeams(false);
                      setUpdates(false);
                      setDocuments(false);
                      setInvestHub(false);
                      setPitch(false);
                      setReview(!review);
                    }}
                  >
                    <IoIosArrowDown />
                  </div>
                  <span
                    className="ml-2 mb-2"
                    onClick={() => {
                      setLegal(false);
                      setIsFirstClicked(false);
                      setCampaign(false);
                      setOverview(false);
                      setTerms(false);
                      setTeams(false);
                      setUpdates(false);
                      setDocuments(false);
                      setInvestHub(false);
                      setPitch(false);
                      setReview(!review);
                    }}
                  >
                    {" "}
                    Review and Submit
                  </span>
                </div>
                <div className="flex flex-col">
                  {/* <span className={companyDetails ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setCompanyDetails(!companyDetails); setSecurities(false);setOfficers(false);setHolders(false);setLegalDocuments(false);setBanking(false)}}>Company Details</span>
                <span className={securities ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setSecurities(!securities); setCompanyDetails(false);setOfficers(false);setHolders(false);setLegalDocuments(false);setBanking(false)}}>Company Securities</span>
                <span className={officers ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setOfficers(!officers); setCompanyDetails(false);setSecurities(false);setHolders(false);setLegalDocuments(false);setBanking(false)}}>Directors and Officers</span>
                <span className={holder ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setHolders(!holder); setCompanyDetails(false);setOfficers(false);setSecurities(false);setLegalDocuments(false);setBanking(false)}}>Principal Securities Holders</span>
                <span className={legalDocuments ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setLegalDocuments(!legalDocuments); setHolders(false); setCompanyDetails(false);setOfficers(false);setSecurities(false);setBanking(false)}}>Legal Documents</span>
                <span className={banking ? `mt-2 ml-8 font-noah-orange-sm` : `mt-2 ml-8 font-noah-black-sm`} onClick={() => {setBanking(!banking); setLegalDocuments(false); setHolders(false); setCompanyDetails(false);setOfficers(false);setSecurities(false)}}>Banking Information</span> */}
                </div>
              </>
            ) : (
              <div className="flex align-items-center">
                <div
                  className="mt-1"
                  onClick={() => {
                    setLegal(false);
                    setIsFirstClicked(false);
                    setCampaign(false);
                    setTerms(false);
                    setTerms(false);
                    setTeams(false);
                    setUpdates(false);
                    setDocuments(false);
                    setInvestHub(false);
                    setPitch(false);
                    setReview(!review);
                  }}
                >
                  <IoIosArrowForward />
                </div>
                <span
                  className="ml-2 mb-2"
                  onClick={() => {
                    setLegal(false);
                    setIsFirstClicked(false);
                    setCampaign(false);
                    setOverview(false);
                    setTerms(false);
                    setTeams(false);
                    setUpdates(false);
                    setDocuments(false);
                    setInvestHub(false);
                    setPitch(false);
                    setReview(!review);
                  }}
                >
                  Review and Submit
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
