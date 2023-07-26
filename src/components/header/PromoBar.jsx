import "./PromoBar.css";

const PromoBar = () => {
  return (
    <section id="promo-message-banner">
      <button className="previousBtn">
        <svg
          id="previousBtnSVG"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <path
            d="M8.60498 12.1955C8.60498 12.4685 8.71498 12.7165 8.89298 12.8975L13.898 17.9025C14.0866 18.0847 14.3392 18.1855 14.6014 18.1832C14.8636 18.1809 15.1144 18.0758 15.2998 17.8904C15.4852 17.705 15.5904 17.4541 15.5927 17.1919C15.5949 16.9297 15.4941 16.6771 15.312 16.4885L11.02 12.1955L15.315 7.90054C15.5022 7.71263 15.6072 7.45804 15.6067 7.19277C15.6062 6.9275 15.5004 6.67328 15.3125 6.48604C15.1246 6.2988 14.87 6.19387 14.6047 6.19434C14.3394 6.19481 14.0852 6.30063 13.898 6.48854L8.91798 11.4685C8.81894 11.5619 8.74008 11.6746 8.68625 11.7996C8.63241 11.9247 8.60476 12.0594 8.60498 12.1955Z"
            fill="white"
          />
        </svg>
      </button>
      <div className="carouselDiv">
        <a
          href="https://www.rei.com/membership/mastercard?trackingId=nav_promo-all"
          className="AnnoyingTag"
        >
          <span className="promoSpan">
            Members {<strong>earn 5% in card rewards</strong>} on all co-op
            purchases with the REI Co-op {<sup>®</sup>} MasterCard{" "}
            {<sup>®</sup>}. {<u>Apply now</u>}
          </span>
        </a>
      </div>
      <button className="nextBtn">
        <svg
          id="nextBtnSVG"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <path
            d="M16.6052 12.1955C16.6055 11.9327 16.502 11.6804 16.3172 11.4935L11.3122 6.48848C11.1236 6.30632 10.871 6.20552 10.6088 6.2078C10.3466 6.21008 10.0958 6.31525 9.9104 6.50066C9.72499 6.68607 9.61982 6.93688 9.61755 7.19907C9.61527 7.46127 9.71606 7.71387 9.89822 7.90248L14.1902 12.1955L9.89522 16.4905C9.70798 16.6784 9.60305 16.933 9.60352 17.1982C9.60399 17.4635 9.70981 17.7177 9.89772 17.905C10.0856 18.0922 10.3402 18.1971 10.6055 18.1967C10.8708 18.1962 11.125 18.0904 11.3122 17.9025L16.2922 12.9225C16.3913 12.8291 16.4701 12.7164 16.524 12.5914C16.5778 12.4663 16.6054 12.3316 16.6052 12.1955Z"
            fill="white"
          />
          git
        </svg>
      </button>
    </section>
  );
};

export default PromoBar;
