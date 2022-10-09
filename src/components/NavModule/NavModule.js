import React, { useContext, useState } from "react"
import { Link } from "gatsby"
import MenuContext from "../MenuContext"
import { motion } from "framer-motion"
import { menuItems } from "./NavConstants"
import { UseSiteMetadata } from "../../hooks/useSiteMetadata"
import useFeaturedProduct from "../../hooks/use-featured-product"
import { FiChevronDown as Chevron } from "react-icons/fi"
import {
  NavModuleStyles,
  NavTopLevel,
  SubNavStyles,
  HamburgerStyles,
  LogoStyles,
} from "./NavModuleStyles"
import {
  barOneVariants,
  barTwoVariants,
  barThreeVariants,
  menuList,
  subMenuNavVariants,
} from "./NavAnim"

const NavModule = () => {
  const featuredProduct = useFeaturedProduct()

  const [isOpen, setNav] = useContext(MenuContext)
  const [subNavIsOpen, setSubNav] = useState(false)

  const toggleNav = () => {
    setNav((isOpen) => !isOpen)
  }

  const toggleSubNav = () => {
    setSubNav((subNavIsOpen) => !subNavIsOpen)
  }

  const { title } = UseSiteMetadata()

  return (
    <NavModuleStyles>
      <div className="nav">
        <div className="container">
          <HamburgerStyles
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            onClick={toggleNav}
            onKeyDown={toggleNav}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            className={isOpen ? " open" : ""}
          >
            <motion.span
              className="bar"
              variants={barOneVariants}
            ></motion.span>
            <motion.span
              className="bar"
              variants={barTwoVariants}
            ></motion.span>
            <motion.span
              className="bar"
              variants={barThreeVariants}
            ></motion.span>
          </HamburgerStyles>

          {title && (
            <LogoStyles>
              <Link to="/">
                {/**
                 
                <svg
                  width="58"
                  height="52"
                  viewBox="0 0 58 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_35_2520)">
                    <path
                      d="M4 3.57C4 1.59834 5.59834 0 7.57 0H50.43C52.4017 0 54 1.59834 54 3.57V39.56C54 41.5317 52.4017 43.13 50.43 43.13H7.57C5.59834 43.13 4 41.5317 4 39.56V3.57Z"
                      fill="#F0F7FA"
                    />
                    <path
                      d="M4.445 3.57C4.445 1.84411 5.84411 0.445 7.57 0.445H50.43C52.1559 0.445 53.555 1.84411 53.555 3.57V39.56C53.555 41.2859 52.1559 42.685 50.43 42.685H7.57C5.84411 42.685 4.445 41.2859 4.445 39.56V3.57Z"
                      stroke="#153440"
                      stroke-width="0.89"
                    />
                  </g>
                  <path
                    d="M7.57141 39.792C7.57141 40.0682 7.79535 40.2926 8.07144 40.2873C10.4892 40.2405 12.3891 39.8499 13.7714 39.1155C15.2476 38.3311 16.2994 37.1188 16.9268 35.4787C17.5172 33.803 17.8125 31.5746 17.8125 28.7936V10.4589C17.8125 9.92386 18.5395 9.76269 18.7656 10.2476L31.5172 37.5967C31.5993 37.7728 31.776 37.8854 31.9703 37.8854H32.4433C32.6361 37.8854 32.8117 37.7745 32.8947 37.6004L46.2004 9.66593C46.4295 9.1849 47.1518 9.34813 47.1518 9.88095V37.3854C47.1518 37.6615 47.3756 37.8854 47.6518 37.8854H48.8661C49.1422 37.8854 49.3661 37.6615 49.3661 37.3854V3.0878C49.3661 2.81166 49.1422 2.5878 48.8661 2.5878H44.4224C44.2298 2.5878 44.0543 2.69845 43.9712 2.87227L31.2773 29.4437C31.0953 29.8247 30.5522 29.8225 30.3733 29.44L17.9473 2.87594C17.865 2.70013 17.6885 2.5878 17.4944 2.5878H13.3303C13.0542 2.5878 12.8303 2.81166 12.8303 3.0878V28.7936C12.8303 32.1094 12.4059 34.6765 11.5571 36.4949C10.7567 38.1382 9.59451 39.039 8.07065 39.1971C7.79598 39.2257 7.57141 39.4463 7.57141 39.7224V39.792Z"
                    fill="#153440"
                  />
                  <defs>
                    <filter
                      id="filter0_d_35_2520"
                      x="0"
                      y="0"
                      width="58"
                      height="51.13"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                      in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_35_2520"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_35_2520"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                */}
                Julio Márquez
                <span>.</span>
              </Link>
            </LogoStyles>
          )}
        </div>
      </div>
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuList}
        transition={{ type: "ease", stiffness: 50, velocity: 50 }}
        className="menu"
      >
        <NavTopLevel>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                onClick={toggleNav}
                onKeyDown={toggleNav}
                to={item.path}
                activeClassName="menu__item--active"
              >
                {item.text}
                <span>.</span>
              </Link>
            </li>
          ))}
          {featuredProduct && (
            <li className={subNavIsOpen ? "open" : "closed"}>
              <button
                type="button"
                onClick={toggleSubNav}
                onKeyDown={toggleSubNav}
              >
                Products<span>.</span>
                <Chevron />
              </button>

              <SubNavStyles
                initial="closed"
                animate={subNavIsOpen ? "open" : "closed"}
                variants={subMenuNavVariants}
              >
                <li>
                  <Link
                    onClick={toggleNav}
                    onKeyDown={toggleNav}
                    to="/products"
                  >
                    All Products<span>.</span>
                  </Link>
                </li>
                <hr />
                {featuredProduct.map((item, index) => {
                  const { gatsbyPath, title } = item
                  return (
                    <li key={index}>
                      <Link
                        onClick={toggleNav}
                        onKeyDown={toggleNav}
                        to={gatsbyPath}
                      >
                        {title}
                        <span>.</span>
                      </Link>
                    </li>
                  )
                })}
              </SubNavStyles>
            </li>
          )}
        </NavTopLevel>
      </motion.div>
    </NavModuleStyles>
  )
}

export default NavModule
