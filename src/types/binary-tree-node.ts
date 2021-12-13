export interface IBinaryTreeNode<T> {
  value: T | null;
  height: number;
  left: IBinaryTreeNode<T> | null;
  right: IBinaryTreeNode<T> | null;
  parent: IBinaryTreeNode<T> | null;
  setLeft: (node: IBinaryTreeNode<T>) => void;
  setRight: (node: IBinaryTreeNode<T>) => void;
}
