import Card from "../../UI/BackgroundCard";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import CategoriesDropdown from "./CategoriesDropdown";
import "./Categories.scss";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import { useContext, useState } from "react";
import StoreContext from "../../context/storeContext";

const Categories = () => {
  const [index, setIndex] = useState("");
  const storeCtx = useContext(StoreContext);
  const onButtonCilck = (e) => {
    let category = e.target.innerText.toLowerCase();

    if (index === "") {
      setIndex(e.target.id);
      storeCtx.setItems({ type: "sort", value: category });
    } else {
      setIndex("");
      storeCtx.setItems({ type: "reset" });
    }
  };

  return (
    <Card className="categories-conatiner">
      <Accordion className="Categories">
        <AccordionSummary
          aria-controls="categories-content"
          id="categories-header"
          expandIcon={<CategoriesDropdown />}
        >
          Categories
        </AccordionSummary>
        <AccordionDetails>
          <Accordion className="categories-section">
            <AccordionSummary
              aria-controls="categories-airplanes"
              id=""
              expandIcon={<CategoriesDropdown />}
            >
              Airplanes
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItemButton
                  className="CategoriesButton"
                  id="0"
                  selected={index === "0"}
                  onClick={onButtonCilck}
                >
                  Fighters
                </ListItemButton>

                <ListItemButton
                  className="CategoriesButton"
                  id="1"
                  selected={index === "1"}
                  onClick={onButtonCilck}
                >
                  Bombers
                </ListItemButton>
                <ListItemButton
                  className="CategoriesButton"
                  id="2"
                  selected={index === "2"}
                  onClick={onButtonCilck}
                >
                  Transport
                </ListItemButton>
              </List>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              aria-controls="categories-helicopters"
              id=""
              expandIcon={<CategoriesDropdown />}
            >
              Helicopters
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItemButton
                  className="CategoriesButton"
                  onClick={onButtonCilck}
                >
                  Attack
                </ListItemButton>
                <ListItemButton
                  className="CategoriesButton"
                  onClick={onButtonCilck}
                >
                  Bombers
                </ListItemButton>
                <ListItemButton
                  className="CategoriesButton"
                  onClick={onButtonCilck}
                >
                  Transport
                </ListItemButton>
              </List>
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};
export default Categories;
