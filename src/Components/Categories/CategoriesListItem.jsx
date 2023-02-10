import ListItemButton from "@mui/material/ListItemButton";

const CategoriesListItem = ({ text, id, selected, onClick, className }) => {
  return (
    <ListItemButton
      className={className}
      id={id}
      selected={selected}
      onClick={onClick}
    >
      {text}
    </ListItemButton>
  );
};

export default CategoriesListItem;
