import { trpc } from "@/utils/trpc";

export const useMutateTag = () => {
  const utils = trpc.useContext();

  const createTagMutation = trpc.tag.createTag.useMutation({
    onSuccess: (res) => {
      const previousTags = utils.tag.getAllTags.getData();
      if (previousTags) {
        utils.tag.getAllTags.setData([res, ...previousTags]);
      }
    },
  });

  const deleteTagMutation = trpc.tag.deleteTag.useMutation({
    onSuccess: (_, variables) => {
      const previousTags = utils.tag.getAllTags.getData();
      if (previousTags) {
        utils.tag.getAllTags.setData(
          previousTags.filter((tag) => tag.id !== variables.id)
        );
      }
    },
  });

  return { createTagMutation, deleteTagMutation };
};
