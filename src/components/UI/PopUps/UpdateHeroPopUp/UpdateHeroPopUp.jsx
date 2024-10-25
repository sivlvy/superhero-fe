import { useForm } from "react-hook-form";
import { createHero } from "../../../../api/superheroes.api";
import { CustomFileInput, CustomInput } from "../../Input/Input";

const UpdateHeroPopUp = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = async (values) => {
    const formData = transformValuesToFormData(values);
    console.log(values.images);
    try {
      const response = await createHero(formData);
      console.log(response);
    } catch (error) {
      console.error("Error creating hero:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CustomInput
        name="nickname"
        control={control}
        placeholder="Nickname"
        required
      />
      <CustomInput
        name="real_name"
        control={control}
        placeholder="Real name"
        required
      />
      <CustomInput
        name="origin_description"
        control={control}
        placeholder="Description"
        required
      />
      <CustomInput
        name="superpowers"
        control={control}
        placeholder="Superpowers"
        required
      />
      <CustomInput
        name="catch_phrase"
        control={control}
        placeholder="Catch phrase"
        required
      />
      <CustomFileInput control={control} name="images" />
      <button type="submit">Submit</button>
    </form>
  );
};

export { UpdateHeroPopUp };
