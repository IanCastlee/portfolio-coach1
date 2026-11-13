import React from 'react';
import PropTypes from 'prop-types';

export function FormField({
  id,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
  rows = 4,
  options = [],
  className = '',
}) {
  const baseInputStyles =
    'w-full bg-white/70 border border-sand-300 px-4 py-3 text-sm text-sand-900 placeholder:text-sand-400 focus:bg-white focus:border-sand-800 focus:outline-none transition-colors duration-200';

  return (
    <div className={`space-y-1.5 ${className}`}>
      <label
        htmlFor={id}
        className="block font-display text-xs tracking-widest uppercase text-sand-800"
      >
        {label} {required && <span className="text-terracotta-500">*</span>}
      </label>

      {type === 'textarea' ? (
        <textarea
          id={id}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`${baseInputStyles} resize-y`}
        />
      ) : type === 'select' ? (
        <select
          id={id}
          value={value}
          onChange={onChange}
          required={required}
          className={`${baseInputStyles} cursor-pointer`}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={baseInputStyles}
        />
      )}

      {error && <p className="text-xs text-terracotta-600 mt-1">{error}</p>}
    </div>
  );
}

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'tel', 'textarea', 'select', 'date']),
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.number,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  className: PropTypes.string,
};

FormField.defaultProps = {
  type: 'text',
  placeholder: '',
  error: undefined,
  required: false,
  rows: 4,
  options: [],
  className: '',
};
