import cn from 'classnames'
import styles from './Image.module.scss'
import { backendBaseUrl } from '@/shared/config/backend'
import { ChangeEvent, useRef, useState } from 'react'
import { Button, ButtonShape, ButtonSize, ButtonVariant } from '@/shared/ui/Button/Button'

type TImageProps = {
    className?: string
    image: string | undefined | null
    isEdit: boolean
}

export const Image = (props: TImageProps) => {
    const { className, image, isEdit } = props

    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const InputFileRef = useRef<HTMLInputElement>(null)

    const previewUploadedFile = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return
        setSelectedFile(e.target.files[0])
    }

    const ClearFileInput = () => {
        if (InputFileRef.current) {
            InputFileRef.current.value = ''
            setSelectedFile(null)
        }
    }
    const ImgSrc = selectedFile === null ? image || `${backendBaseUrl}/default_img.png` : URL.createObjectURL(selectedFile)

    return (
        <div
            className={cn(styles.Image, className)}
        >
            <div className={styles.imageWrapper}>
                <img className={styles.img} src={ImgSrc} alt="Изображение коллекции" />
            </div>
            <br />
            {
                isEdit &&
                <div className={styles.inputControl}>
                    <input type="file" ref={InputFileRef} onChange={previewUploadedFile} />
                    {selectedFile &&
                        <Button
                            shape={ButtonShape.ROUNDED}
                            variant={ButtonVariant.OUTLINED}
                            size={ButtonSize.S}
                            onClick={ClearFileInput}>X</Button>
                    }
                </div>
            }
        </div>
    )
}