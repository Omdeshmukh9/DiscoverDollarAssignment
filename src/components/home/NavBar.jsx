import React, { useState } from "react";
import { Box, Typography, styled, ButtonBase } from "@mui/material";
import navData from "../../constants/data.json";

const Component = styled(Box)`
  display: flex;
  margin: 55px 130px 0 130px;
  justify-content: space-between;
`;

const Container = styled(Box)`
  position: relative;
  padding: 12px 8px;
  text-align: center;
  &:hover {
    background-color: #f0f0f0;
    cursor: pointer;
  }
`;

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;

const Image = styled("img")`
  max-width: 100%;
  height: auto;
`;

const DropdownContainer = styled(Box)`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  min-width: 200px;
`;

const SubCategoryList = styled(Box)`
  margin-top: 8px;
`;

const SubCategoryContainer = styled(Box)`
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 1000;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  min-width: 200px;
`;

const Navbar = () => {
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentSubCategory, setCurrentSubCategory] = useState(null);

  const handleCategoryHover = (category) => {
    setCurrentCategory(category);
    setCurrentSubCategory(null); // Reset subcategory when hovering over main category
  };

  const handleSubCategoryHover = (subcategory) => {
    setCurrentSubCategory(subcategory);
  };

  const handleCloseDropdown = () => {
    setCurrentCategory(null);
    setCurrentSubCategory(null);
  };

  return (
    <Component>
      {navData.map((data) => (
        <ButtonBase
          key={data.text}
          component="div"
          onMouseEnter={() => handleCategoryHover(data.category)}
          onMouseLeave={handleCloseDropdown}
        >
          <Container>
            <Image src={data.url} alt="nav" />
            <Text>{data.text}</Text>
            {currentCategory === data.category && (
              <DropdownContainer>
                {Array.isArray(data.subCategory)
                  ? data.subCategory.map((sub, index) => (
                      <div
                        key={index}
                        onMouseEnter={() => handleSubCategoryHover(sub)}
                        style={{ padding: "5px 0", borderBottom: "1px solid #eee" }}
                      >
                        <Typography variant="body2">
                          {typeof sub === "string" ? sub : sub.name}
                        </Typography>
                        {currentSubCategory === sub && sub.subcategories && (
                          <SubCategoryContainer>
                            {sub.subcategories.map((item, idx) => (
                              <Typography key={idx} variant="body2" style={{ padding: "5px 0" }}>
                                {item}
                              </Typography>
                            ))}
                          </SubCategoryContainer>
                        )}
                      </div>
                    ))
                  : null}
              </DropdownContainer>
            )}
          </Container>
        </ButtonBase>
      ))}
    </Component>
  );
};

export default Navbar;
