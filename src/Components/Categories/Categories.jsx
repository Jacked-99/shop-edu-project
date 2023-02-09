import Card from "../../UI/BackgroundCard";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import { useContext, useState } from "react";
import StoreContext from "../../context/storeContext";
import { Form } from "react-router-dom";

const Categories = () => {
  const [index, setIndex] = useState();
  const storeCtx = useContext(StoreContext);
  const onButtonCilck = (e) => {
    let category = e.target.innerText.toLowerCase();
    storeCtx.setItems({ type: "sort", value: category });
    setIndex(e.target.id);
  };

  return (
    <Card>
      <Accordion>
        <AccordionSummary
          aria-controls="categories-content"
          id="categories-header"
          expandIcon={<ExpandMoreIcon />}
        >
          Categories
        </AccordionSummary>
        <AccordionDetails>
          <Accordion>
            <AccordionSummary
              aria-controls="categories-airplanes"
              id=""
              expandIcon={<ExpandMoreIcon />}
            >
              Airplanes
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <Form action="/">
                  <ListItemButton
                    id="0"
                    selected={index === "0"}
                    onClick={onButtonCilck}
                  >
                    Fighters
                  </ListItemButton>
                </Form>
                <ListItemButton
                  id="1"
                  selected={index === "1"}
                  onClick={onButtonCilck}
                >
                  Bombers
                </ListItemButton>
                <ListItemButton
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
              expandIcon={<ExpandMoreIcon />}
            >
              Helicopters
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItemButton onClick={onButtonCilck}>Attack</ListItemButton>
                <ListItemButton onClick={onButtonCilck}>Bombers</ListItemButton>
                <ListItemButton onClick={onButtonCilck}>
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
