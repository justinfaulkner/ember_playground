class TabItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :cents, :tab_id
end
