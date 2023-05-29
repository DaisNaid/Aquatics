const SvgLoader = ({ IconDefs, xlinkHref, ...other }) => {
    if (!IconDefs[xlinkHref]) {
      return null;
    }
    return IconDefs[xlinkHref](other);
  };
  
export default SvgLoader;
