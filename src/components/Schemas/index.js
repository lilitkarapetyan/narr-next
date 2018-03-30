import PropTypes from "prop-types";

export const CategoryPriorityType = PropTypes.oneOf(["High", "Medium", "Low"]);

export const IdSchema = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string
]);
export const FieldType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
});

export const EntryType = PropTypes.shape({
  id: IdSchema.isRequired,
  name: PropTypes.string,
  priority: PropTypes.string,
  fields: PropTypes.oneOfType([PropTypes.arrayOf(FieldType), PropTypes.object])
});

export const CategoryType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  priority: CategoryPriorityType,
  entries: PropTypes.arrayOf(EntryType).isRequired,
  created: PropTypes.object5,
  mType: PropTypes.string,
  privacy: PropTypes.string
});
