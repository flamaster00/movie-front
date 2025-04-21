import cn from 'classnames'
import styles from './CollectionInfo.module.scss'
import { Image } from './Image/Image'
import { useState } from 'react'
import { Textarea } from '@/shared/ui/Textarea/Textarea'

type collectionInfoProps = {
    className?: string
}

export const CollectionInfo = (props: collectionInfoProps) => {
    const { className } = props
    const [isEdit, setIsEdit] = useState(false)
    const [title, setTitle] = useState('')
    return (
        <div
            className={cn(styles.CollectionInfo, className)}
        >
            <Image image={undefined} isEdit={isEdit}/>
            <Textarea value={title} readonly={true} onChange={(v) => {setTitle(v)}}/>
                <Textarea value=''/>
        </div>
    )
}