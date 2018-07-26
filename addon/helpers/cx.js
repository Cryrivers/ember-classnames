import { helper as buildHelper } from "@ember/component/helper";
import classNames from "classnames";

export default buildHelper(function([...params], hash) {
  return classNames(...params, hash);
});
