import { UploadIcon } from "@sanity/icons/Upload";
import { Button, Flex, Stack, Text } from "@sanity/ui";
import { useRef, useState } from "react";
import { type ArrayOfObjectsInputProps, insert, setIfMissing, useClient } from "sanity";

const batchSize = 5;

function uniqueKey() {
  return Math.random().toString(36).slice(2, 12);
}

export function BatchImageInput(props: ArrayOfObjectsInputProps) {
  const client = useClient({ apiVersion: "2025-02-19" });
  const picker = useRef<HTMLInputElement>(null);
  const [progress, setProgress] = useState<{ done: number; total: number } | null>(null);

  const uploadFiles = async (fileList: FileList | null) => {
    const files = Array.from(fileList ?? []);
    if (files.length === 0) return;
    setProgress({ done: 0, total: files.length });
    props.onChange(setIfMissing([]));

    for (let start = 0; start < files.length; start += batchSize) {
      const batch = files.slice(start, start + batchSize);
      const assets = await Promise.all(
        batch.map((file) => client.assets.upload("image", file, { filename: file.name })),
      );
      const items = assets.map((asset) => ({
        _type: "image",
        _key: uniqueKey(),
        asset: { _type: "reference", _ref: asset._id },
      }));
      props.onChange(insert(items, "after", [-1]));
      setProgress({ done: Math.min(start + batch.length, files.length), total: files.length });
    }

    setProgress(null);
    if (picker.current) picker.current.value = "";
  };

  return (
    <Stack gap={3}>
      {props.renderDefault(props)}
      <Flex align="center" gap={3}>
        <Button
          icon={UploadIcon}
          text="Upload multiple"
          mode="ghost"
          disabled={progress !== null || props.readOnly}
          onClick={() => picker.current?.click()}
        />
        {progress && (
          <Text size={1} muted>
            Uploading {progress.done} / {progress.total}…
          </Text>
        )}
      </Flex>
      <input
        ref={picker}
        type="file"
        accept="image/*"
        multiple
        hidden
        onChange={(event) => uploadFiles(event.currentTarget.files)}
      />
    </Stack>
  );
}
