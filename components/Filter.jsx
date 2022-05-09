
import Select from 'react-select';
const Filter = ({ handleChange, label, options }) => {

  return (
    <>
      <div className=''>
        <span className='label-set-filter'>{label}</span>
        {/* <input type="text" list='my-list' onChange={handleChange} />
        <datalist id='my-list' >
          {
            options?.map((item, index) => {
              return (
                <option key={index} value={item.label}></option>
              )
            })
          }
        </datalist> */}
        <Select
          className="basic-single"
          classNamePrefix="select"
          //   defaultValue={colourOptions[0]}
          //   isDisabled={isDisabled}
          //   isLoading={isLoading}
          //   isClearable={isClearable}
          //   isRtl={isRtl}
          //   isSearchable={isSearchable}
          //   name="color"
          options={options}
          onChange={handleChange}
        />
      </div>
    </>
  )
};

export default Filter;
