import { useForm } from "react-hook-form";
import { updateHero } from "../../../../api/superheroes.api";
import { CustomFileInput, CustomInput } from "../../Input/Input";

const transformValuesToFormData = (values) => {
  const formData = new FormData();
  Object.keys(values).forEach((key) => {
    if (Array.isArray(values[key])) {
      values[key].forEach((value) => formData.append(key, value));
    } else if (values[key] !== undefined && values[key] !== "") {
      formData.append(key, values[key]);
    }
  });
  if (values.images) {
    values.images.forEach((file) => {
      formData.append("images", file);
    });
  }
  return formData;
};

const UpdateHeroPopUp = ({ item }) => {
  const { handleSubmit, control } = useForm();

  const onSubmit = async (values) => {
    const formData = transformValuesToFormData(values);
    console.log(values.images);
    try {
      const response = await updateHero(formData, item.id);
      console.log(response);
    } catch (error) {
      console.error("Error creating hero:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CustomInput name="nickname" control={control} placeholder="Nickname" />
      <CustomInput name="real_name" control={control} placeholder="Real name" />
      <CustomInput
        name="origin_description"
        control={control}
        placeholder="Description"
      />
      <CustomInput
        name="superpowers"
        control={control}
        placeholder="Superpowers"
      />
      <CustomInput
        name="catch_phrase"
        control={control}
        placeholder="Catch phrase"
      />
      <CustomFileInput control={control} name="images" />
      <button type="submit">Submit</button>
    </form>
  );
};

export { UpdateHeroPopUp };
