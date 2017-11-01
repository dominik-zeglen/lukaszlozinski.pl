import {
  GraphQLBoolean,
  GraphQLID, GraphQLInputObjectType, GraphQLInputType, GraphQLList,
  GraphQLNonNull, GraphQLString,
} from 'graphql';
import {isUndefined} from "util";
import {currentDateTime} from '../../../helpers';
import {ObjectFieldInput} from "../../types/objectField";

const validateSchema = (schema) => {
  const required = ['name', 'fields'];
  const allowed = ['description'];
  const replace = [];
  const defaults = {
    created_at: currentDateTime(),
  };

  const score = Object.keys(schema).filter((f) => {
    return required.indexOf(f) > -1;
  }).length;

  if (score === required.length) {
    Object.keys(schema).filter((f) => {
      return (required.indexOf(f) > -1) || (allowed.indexOf(f) > -1);
    });
    replace.forEach((f) => {
      schema[f.after] = schema[f.before];
      delete schema[f.before];
    });
    Object.keys(defaults).forEach((f) => {
      if (isUndefined(schema[f])) {
        schema[f] = defaults[f];
      }
    });
    schema.created_at = currentDateTime();
    return schema;
  } else {
    return new Error('Make sure object contains following properties: ' + required.toString());
  }
};

export default ((db) => {
  return {
    args: {
      description: {
        name: 'description',
        type: GraphQLString,
      },
      fields: {
        name: 'fields',
        type: new GraphQLList(ObjectFieldInput),
      },
      name: {
        name: 'name',
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    type: GraphQLID,
    async resolve(root, params, options) {
      const data = (await db.get('modules').insert(validateSchema(params)));
      return data._id;
    },
  };
});
