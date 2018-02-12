const allCountriesQueryConfig = {
  props: ({ data: { countries = {} } }) => ({
    countries: (countries.edges || []).map(({ node: { id, name } }) => ({
      id,
      name,
    })),
  }),
};

export default allCountriesQueryConfig;
