import SvgLoader from 'components/SvgLoader';

const IconDefs = {
  'white-check-icon': props => (
    <svg { ...props } fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8">
      <path d="M7 1.1 2.8 5.5.9 3.8l-.9 1 2.7 2.6L8 2 7 1Z" fill="#FFF"/>
    </svg>
  ),
  'chevron-down': props => (
  <svg { ...props } version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 185.3 185.3">
    <path d="M92.7 144.4c-2.8 0-5.5-1-7.6-3.2L3 59.3a10.7 10.7 0 1 1 15.2-15.2l74.4 74.4L167 44a10.7 10.7 0 1 1 15.2 15.2l-82 82c-2 2-4.8 3-7.5 3z" fill="#FFF"/>
  </svg>
  )
};

const IconLoader = ({ xlinkHref, ...other }) => {
  return SvgLoader({ xlinkHref, IconDefs, ...other });
};

export default IconLoader;
